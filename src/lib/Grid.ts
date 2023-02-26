import { make2DArray } from "../helpers/make2DArray";
import { randomFill2DArray } from "../helpers/randomFill2DArray";

export class Grid {
  private _size: number;
  private _grid: number[][];

  constructor(size: number) {
    this._size = size;
    this._grid = make2DArray(this._size);
    this._grid = randomFill2DArray(this._grid);
  }

  public loadExample(example: number[][]): void {
    this._grid = example;
    this._size = example.length;
  }

  public set update(grid: number[][]) {
    this._grid = grid;
  }

  public get grid(): number[][] {
    return this._grid;
  }

  public get size(): number {
    return this._size;
  }
}
