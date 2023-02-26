import { blinker } from "./examples/blinker";
import { nextGeneration } from "./helpers/nextGeneration";
import { Canvas } from "./lib/Canvas";
import { Grid } from "./lib/Grid";
import "./style.scss";

let canvas: Canvas;
const size = 200;
let grid: Grid;
let run = false;

function setup(): void {
  canvas = new Canvas(window.innerHeight - 5);
  grid = new Grid(size);

  grid.loadExample(blinker);
  canvas.drawGrid(grid);
}

function play(): void {
  if (run) {
    canvas.drawGrid(grid);
    grid.update = nextGeneration(grid);
  }
  requestAnimationFrame(play);
}

// Listeners
window.addEventListener("load", setup);
document.getElementById("run")?.addEventListener("click", () => {
  run = !run;
});
document.getElementById("save")?.addEventListener("click", () => {
  const cells = document.getElementById("cells") as HTMLInputElement;
  const numberOfCells = parseInt(cells.value);

  grid = new Grid(numberOfCells);
  canvas.drawGrid(grid);
});

requestAnimationFrame(play);
