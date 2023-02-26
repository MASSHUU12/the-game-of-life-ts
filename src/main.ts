import { make2DArray } from "./helpers/make2DArray";
import { nextGeneration } from "./helpers/nextGeneration";
import { randomFill2DArray } from "./helpers/randomFill2DArray";
import { Canvas } from "./lib/Canvas";
import "./style.css";

let canvas: Canvas;
let grid: any[][];
let cols = 100,
  rows = 100;

function setup(): void {
  canvas = new Canvas(896, 896);

  grid = make2DArray(cols, rows);
  grid = randomFill2DArray(grid);
}

function play(): void {
  // console.clear();
  // console.table(grid);

  // TODO: Delta time

  canvas.drawGrid(cols, rows, grid);
  grid = nextGeneration(cols, rows, grid);

  requestAnimationFrame(play);
}

// setup();

window.addEventListener("load", setup);

// document.getElementById("step")?.addEventListener("click", play);

requestAnimationFrame(play);
