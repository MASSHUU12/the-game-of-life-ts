import { make2DArray } from "../helpers/make2DArray";
import { randomFill2DArray } from "../helpers/randomFill2DArray";

export class Grid {
  private _cols: number;
  private _rows: number;
  private _grid: number[][];

  constructor(cols: number, rows: number) {
    this._cols = cols;
    this._rows = rows;
    this._grid = make2DArray(this._cols, this._rows);
    this._grid = randomFill2DArray(this._grid);
  }

  public set update(grid: number[][]) {
    this._grid = grid;
  }

  public get grid(): number[][] {
    return this._grid;
  }

  public get size(): { cols: number; rows: number } {
    return {
      cols: this._cols,
      rows: this._rows,
    };
  }
}
