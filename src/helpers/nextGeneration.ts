import { make2DArray } from "./make2DArray";

export function nextGeneration(
  cols: number,
  rows: number,
  grid: number[][]
): number[][] {
  const next = make2DArray(cols, rows);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];

      // Count live neighbors
      let neighbors = countNeighbors(grid, i, j, cols, rows);

      if (state === 0 && neighbors === 3) {
        next[i][j] = 1;
      } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }
    }
  }
  return next;
}

function countNeighbors(
  grid: number[][],
  x: number,
  y: number,
  cols: number,
  rows: number
): number {
  let sum = 0;

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;

      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];

  return sum;
}
