import { nextGeneration } from "./helpers/nextGeneration";
import { Canvas } from "./lib/Canvas";
import { Grid } from "./lib/Grid";
import "./style.scss";

let canvas: Canvas;
const cols = 200,
  rows = 200;
let grid: Grid;

function setup(): void {
  canvas = new Canvas(window.innerHeight - 5, window.innerHeight - 5);
  grid = new Grid(cols, rows);
}

function play(): void {
  // TODO: Delta time

  canvas.drawGrid(grid);
  grid.update = nextGeneration(grid);

  requestAnimationFrame(play);
}

// setup();

window.addEventListener("load", setup);

requestAnimationFrame(play);
