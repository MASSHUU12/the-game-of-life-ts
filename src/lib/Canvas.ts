import { Block } from "../types/types";
import clamp from "../helpers/math/clamp";
import { Grid } from "./Grid";

export class Canvas {
  private _canvas: HTMLCanvasElement;
  private _context: CanvasRenderingContext2D;

  constructor(size: number) {
    const app = document.querySelector("#app");
    const canv = document.createElement("canvas") as HTMLCanvasElement;

    canv.width = size;
    canv.height = size;

    app?.appendChild(canv);

    this._canvas = app?.querySelector("canvas") as HTMLCanvasElement;
    this._context = this._canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  public get canvas(): HTMLCanvasElement {
    return this._canvas;
  }

  public get context(): CanvasRenderingContext2D {
    return this._context;
  }

  public reset(): void {
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._context.fillStyle = "white";
    this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
  }

  public drawBlock(block: Block): void {
    const x = clamp(block.x, 0, this._canvas.width);
    const y = clamp(block.y, 0, this._canvas.height);
    const w = clamp(block.w, 0, this._canvas.width);
    const h = clamp(block.h, 0, this._canvas.height);

    this._context.fillStyle = block.color;
    this._context.fillRect(x, y, w, h);
  }

  public drawGrid(grid: Grid): void {
    const size = grid.size;

    this.reset();

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const blockW = this._canvas.width / size;
        const blockH = this._canvas.height / size;

        this.drawBlock({
          x: blockW * i,
          y: blockH * j,
          w: blockW,
          h: blockW,
          color: grid.grid[i][j] === 1 ? "black" : "white",
        });
      }
    }
  }
}
