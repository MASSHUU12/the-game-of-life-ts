import examples from "../examples/examples.json";
import clamp from "../helpers/math/clamp";
import { Canvas } from "./Canvas";
import { Grid } from "./Grid";

export class Settings {
  static canvas: Canvas;
  static grid: Grid;
  static size = 200;
  static run = false;
  static start: number;
  static refreshRate = 300;

  static update(): void {
    const cells = document.getElementById("cells") as HTMLInputElement;
    const numberOfCells = clamp(parseInt(cells.value), 1, 9999);

    const refreshRateItem = document.getElementById(
      "refreshRate"
    ) as HTMLInputElement;
    const rate = clamp(parseInt(refreshRateItem.value), 1, 10000);

    const map = document.getElementById("map") as HTMLSelectElement;

    Settings.refreshRate = rate;
    Settings.size = numberOfCells;

    if (map.value === "random" || map.value === "") Settings.random();
    else {
      for (const example of examples) {
        if (example.name === map.value) {
          Settings.grid.loadExample(example.map);
          Settings.canvas.drawGrid(Settings.grid);
        }
      }
    }
  }

  static random() {
    Settings.grid = new Grid(Settings.size);
    Settings.canvas.drawGrid(Settings.grid);
  }
}
