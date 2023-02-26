import { beacon } from "./beacon";
import { blinker } from "./blinker";
import { glider } from "./glider";
import { hwss } from "./hwss";
import { lwss } from "./lwss";
import { mwss } from "./mwss";
import { pentaDecathlon } from "./pentaDecathlon";
import { pulsar } from "./pulsar";
import { toad } from "./toad";

export const examples = [
  {
    name: "Blinker",
    map: blinker,
  },
  {
    name: "Toad",
    map: toad,
  },
  {
    name: "Beacon",
    map: beacon,
  },
  {
    name: "Pulsar",
    map: pulsar,
  },
  {
    name: "Penta-decathlon",
    map: pentaDecathlon,
  },
  {
    name: "Glider",
    map: glider,
  },
  {
    name: "Light-weight spaceship",
    map: lwss,
  },
  {
    name: "Middle-weight spaceship",
    map: mwss,
  },
  {
    name: "Heavy-weight spaceship",
    map: hwss,
  },
];
