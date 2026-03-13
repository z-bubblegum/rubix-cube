// PLL Trainer - App
// Dynamic import so sidebar renders even if CDN is slow
let TwistyPlayer = null;
const twistyReady = import("./cubing-bundle.js")
  .then((mod) => { TwistyPlayer = mod.TwistyPlayer; })
  .catch((err) => console.error("Failed to load cubing.js:", err));

// ── State ──────────────────────────────────
let currentCase = null;
let player = null;
let playing = false;
let syncId = null;
let moveCount = 0;
let activeMoveIdx = -1;

// ── Status Tracking ──────────────────────────
const STATUS_CYCLE = ["none", "green", "yellow", "red"];

function loadStatuses() {
  try { return JSON.parse(localStorage.getItem("pll-status")) || {}; } catch { return {}; }
}

function saveStatuses(statuses) {
  localStorage.setItem("pll-status", JSON.stringify(statuses));
}

function cycleStatus(name) {
  const statuses = loadStatuses();
  const current = statuses[name] || "none";
  const idx = STATUS_CYCLE.indexOf(current);
  const next = STATUS_CYCLE[(idx + 1) % STATUS_CYCLE.length];
  if (next === "none") delete statuses[name];
  else statuses[name] = next;
  saveStatuses(statuses);
  return next;
}

// ── DOM ────────────────────────────────────
const $ = (s) => document.getElementById(s);
const sidebar = $("sidebar");
const overlay = $("overlay");
const sidebarNav = $("sidebar-nav");
const welcome = $("welcome");
const caseView = $("case-view");
const cubeContainer = $("cube-container");

// ── Build Sidebar ──────────────────────────
function buildSidebar() {
  if (typeof PLL_DATA === "undefined") {
    console.error("PLL_DATA not found");
    return;
  }

  const statuses = loadStatuses();
  let html = "";
  PLL_DATA.forEach((group) => {
    html += `<div class="nav-group">`;
    html += `<div class="nav-group-title">${group.category}</div>`;
    group.cases.forEach((c) => {
      const badge = c.name.replace(" Perm", "");
      const status = statuses[c.name] || "none";
      html += `<button class="nav-btn" data-name="${c.name}">
        <span class="nav-badge">${badge}</span>
        <span class="nav-label">${c.name}</span>
        <span class="nav-status" data-status="${status}"></span>
      </button>`;
    });
    html += `</div>`;
  });
  sidebarNav.innerHTML = html;

  sidebarNav.addEventListener("click", (e) => {
    // Handle status dot click
    const dot = e.target.closest(".nav-status");
    if (dot) {
      e.stopPropagation();
      const btn = dot.closest(".nav-btn");
      const name = btn.dataset.name;
      const next = cycleStatus(name);
      dot.dataset.status = next;
      return;
    }
    const btn = e.target.closest(".nav-btn");
    if (!btn) return;
    loadCase(btn.dataset.name);
    closeSidebar();
  });
}

// ── Find Case ──────────────────────────────
function findCase(name) {
  for (const g of PLL_DATA) {
    for (const c of g.cases) {
      if (c.name === name) return { data: c, category: g.category };
    }
  }
  return null;
}

// ── Load Case ──────────────────────────────
async function loadCase(name) {
  const found = findCase(name);
  if (!found) return;

  const { data, category } = found;
  currentCase = data;

  // Update sidebar active
  sidebarNav.querySelectorAll(".nav-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.name === name);
  });

  // Switch to case view
  welcome.style.display = "none";
  caseView.style.display = "block";

  // Update header
  $("case-cat").textContent = category;
  $("case-name").textContent = data.name;
  $("mobile-title").textContent = data.name;
  $("alg-text").textContent = data.algorithm;

  // Info cards
  $("info-recognition").textContent = data.recognition.pattern;
  $("info-orientation").textContent = data.recognition.holding_orientation;

  // 2D Diagram
  render2DDiagram(data.diagram);

  // Finger tricks
  buildTricks(data.moves_breakdown);

  // Create player
  await createPlayer(data);

  // Reset
  playing = false;
  activeMoveIdx = -1;
  updatePlayBtn();
  moveCount = data.moves_breakdown.length;
}

// ── Create Player ──────────────────────────
async function createPlayer(data) {
  stopSync();
  cubeContainer.innerHTML = "";

  // Wait for cubing.js to load
  if (!TwistyPlayer) {
    cubeContainer.innerHTML = '<div style="color:var(--text-3);font-size:0.85rem;">Loading 3D cube...</div>';
    await twistyReady;
    if (!TwistyPlayer) {
      cubeContainer.innerHTML = '<div style="color:var(--red);font-size:0.85rem;">Failed to load 3D viewer</div>';
      return;
    }
    cubeContainer.innerHTML = "";
  }

  player = new TwistyPlayer({
    puzzle: "3x3x3",
    alg: data.algorithm,
    experimentalSetupAlg: "x2 " + data.setup_algorithm,
    visualization: "3D",
    controlPanel: "bottom",
    background: "none",
    tempoScale: parseFloat($("speed-sel").value),
  });

  // Must set inline styles - CSS selectors don't reliably size this custom element
  player.style.display = "block";
  player.style.width = "400px";
  player.style.height = "400px";
  player.style.maxWidth = "100%";
  player.style.maxHeight = "100%";

  cubeContainer.appendChild(player);
  startSync();
}

// ── Build Finger Trick Cards ───────────────
function buildTricks(moves) {
  const grid = $("tricks-grid");
  grid.innerHTML = moves.map((m, i) => `
    <div class="trick-card" data-idx="${i}">
      <span class="trick-num">${i + 1}</span>
      <div class="trick-move">${m.move}</div>
      <div class="trick-desc">${m.finger_trick}</div>
    </div>
  `).join("");
}

// ── Render 2D Diagram ─────────────────────
function render2DDiagram(diagramData) {
  const container = $("diagram-container");
  if (!container) return;
  if (!diagramData) {
    container.innerHTML = "";
    return;
  }

  const colorMap = {
    Front: "green",
    Back: "blue",
    Left: "orange",
    Right: "red",
  };

  const { top_edge, right_edge, bottom_edge, left_edge } = diagramData;

  // Build the 5x5 grid row by row
  const cells = [];

  // Row 0: [empty] [top_0] [top_1] [top_2] [empty]
  cells.push("empty", colorMap[top_edge[0]], colorMap[top_edge[1]], colorMap[top_edge[2]], "empty");

  // Rows 1-3: [left_i] [Y] [Y] [Y] [right_i]
  for (let i = 0; i < 3; i++) {
    cells.push(colorMap[left_edge[i]], "yellow", "yellow", "yellow", colorMap[right_edge[i]]);
  }

  // Row 4: [empty] [bot_0] [bot_1] [bot_2] [empty]
  cells.push("empty", colorMap[bottom_edge[0]], colorMap[bottom_edge[1]], colorMap[bottom_edge[2]], "empty");

  const grid = document.createElement("div");
  grid.className = "diagram-grid";
  cells.forEach((cls) => {
    const cell = document.createElement("div");
    cell.className = "diagram-cell " + cls;
    grid.appendChild(cell);
  });

  container.innerHTML = "";
  container.appendChild(grid);
}

// ── Sync Animation ─────────────────────────
function getMs(ts) {
  if (ts == null) return 0;
  if (typeof ts === "number") return ts;
  if (typeof ts === "object" && ts.totalMilliseconds != null) return ts.totalMilliseconds;
  return parseFloat(ts) || 0;
}

function startSync() {
  const MS_PER_MOVE = 1000;

  function tick() {
    if (!player || !currentCase) {
      syncId = requestAnimationFrame(tick);
      return;
    }

    try {
      const ts = getMs(player.timestamp);
      if (ts < 1) {
        if (activeMoveIdx !== -1) {
          activeMoveIdx = -1;
          updateTrickHighlights();
        }
      } else {
        const idx = Math.min(Math.floor(ts / MS_PER_MOVE), moveCount - 1);
        if (idx !== activeMoveIdx) {
          activeMoveIdx = idx;
          updateTrickHighlights();
        }
      }

      // Detect end
      if (ts >= (moveCount * MS_PER_MOVE) - 80 && playing) {
        playing = false;
        updatePlayBtn();
        // Mark all done
        activeMoveIdx = moveCount;
        updateTrickHighlights();
      }
    } catch (_) {}

    syncId = requestAnimationFrame(tick);
  }

  syncId = requestAnimationFrame(tick);
}

function stopSync() {
  if (syncId) { cancelAnimationFrame(syncId); syncId = null; }
}

function updateTrickHighlights() {
  const cards = $("tricks-grid").children;
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.classList.remove("active", "done");
    if (activeMoveIdx >= moveCount) {
      card.classList.add("done");
    } else if (i === activeMoveIdx) {
      card.classList.add("active");
      card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else if (i < activeMoveIdx) {
      card.classList.add("done");
    }
  }
}

// ── Playback Controls ──────────────────────
function updatePlayBtn() {
  const svg = $("play-svg");
  svg.innerHTML = playing
    ? '<rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/><rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/>'
    : '<path d="M8 5v14l11-7z" fill="currentColor"/>';
}

$("btn-play").addEventListener("click", async () => {
  if (!player) return;
  if (playing) {
    player.pause();
    playing = false;
  } else {
    try {
      const ts = getMs(player.timestamp);
      if (ts >= (moveCount - 1) * 1000 + 500) {
        player.timestamp = 0;
        activeMoveIdx = -1;
        updateTrickHighlights();
        await new Promise((r) => setTimeout(r, 60));
      }
    } catch (_) {}
    player.play();
    playing = true;
  }
  updatePlayBtn();
});

$("btn-reset").addEventListener("click", () => {
  if (!player) return;
  player.pause();
  playing = false;
  updatePlayBtn();
  player.timestamp = 0;
  activeMoveIdx = -1;
  updateTrickHighlights();
});

$("btn-next").addEventListener("click", () => {
  if (!player) return;
  player.pause();
  playing = false;
  updatePlayBtn();
  try {
    const ts = getMs(player.timestamp);
    player.timestamp = Math.min((Math.floor(ts / 1000) + 1) * 1000, moveCount * 1000);
  } catch (_) {}
});

$("btn-prev").addEventListener("click", () => {
  if (!player) return;
  player.pause();
  playing = false;
  updatePlayBtn();
  try {
    const ts = getMs(player.timestamp);
    const cur = Math.floor(ts / 1000) * 1000;
    player.timestamp = ts > cur + 50 ? cur : Math.max(0, cur - 1000);
  } catch (_) {}
});

$("btn-end").addEventListener("click", () => {
  if (!player) return;
  player.pause();
  playing = false;
  updatePlayBtn();
  try { player.timestamp = moveCount * 1000; } catch (_) {}
});

$("speed-sel").addEventListener("change", () => {
  if (player) player.tempoScale = parseFloat($("speed-sel").value);
});

// ── Sidebar Toggle ─────────────────────────
function openSidebar() {
  sidebar.classList.add("open");
  overlay.classList.add("show");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
}

$("hamburger").addEventListener("click", openSidebar);
overlay.addEventListener("click", closeSidebar);

// ── Keyboard Shortcuts ─────────────────────
document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return;
  switch (e.key) {
    case " ": e.preventDefault(); $("btn-play").click(); break;
    case "ArrowRight": e.preventDefault(); $("btn-next").click(); break;
    case "ArrowLeft": e.preventDefault(); $("btn-prev").click(); break;
    case "r": $("btn-reset").click(); break;
    case "Escape": closeSidebar(); break;
  }
});

// ── Init ───────────────────────────────────
buildSidebar();
loadCase("Ua Perm");
