import { pulsar } from "./examples/pulsar";
import { nextGeneration } from "./helpers/nextGeneration";
import { Canvas } from "./lib/Canvas";
import { Grid } from "./lib/Grid";
import { Settings } from "./lib/Settings";
import "./style.scss";

function setup(): void {
  Settings.canvas = new Canvas(window.innerHeight - 5);
  Settings.grid = new Grid(Settings.size);
  Settings.grid.loadExample(pulsar);
  Settings.canvas.drawGrid(Settings.grid);
  Settings.update();
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
document.getElementById("random")?.addEventListener("click", () => {
  Settings.random();
});

requestAnimationFrame(play);
