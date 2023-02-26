export function randomFill2DArray(grid: any[][]): number[][] {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = Math.floor(Math.random() * 2);
    }
  }
  return grid;
}
