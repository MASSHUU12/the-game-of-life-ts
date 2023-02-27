import examples from "./examples/examples.json";
import { nextGeneration } from "./helpers/nextGeneration";
import { Canvas } from "./lib/Canvas";
import { Grid } from "./lib/Grid";
import { Settings } from "./lib/Settings";
import "./style.scss";

function setup(): void {
  Settings.canvas = new Canvas(window.innerHeight - 5);
  Settings.grid = new Grid(Settings.size);
  Settings.canvas.drawGrid(Settings.grid);
  Settings.update();

  const map = document.getElementById("map");

  if (map !== null) {
    map.innerHTML += `<option value="random" selected>Random</option>`;

    for (const example of examples) {
      map.innerHTML += `<option value="${example.name}">${example.name}</option>`;
    }
  }
}

function play(timestamp: number): void {
  if (Settings.start === undefined) Settings.start = timestamp;

  const elapsed = timestamp - Settings.start;

  if (elapsed < Settings.refreshRate || !Settings.run) {
    requestAnimationFrame(play);
    return;
  }

  Settings.start = timestamp;

  Settings.canvas.drawGrid(Settings.grid);
  Settings.grid.update = nextGeneration(Settings.grid);

  requestAnimationFrame(play);
}

// Listeners
window.addEventListener("load", setup);
document.getElementById("run")?.addEventListener("click", () => {
  Settings.run = !Settings.run;
});
document.getElementById("save")?.addEventListener("click", () => {
  Settings.update();
});

requestAnimationFrame(play);
