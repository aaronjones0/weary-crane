import { TerrainType } from "../../types/TerrainType.ts";
import { Territory } from "../../types/Territory.ts";

const ROW1 = new Map<number, TerrainType>([
  [0, "sea"],
  [1, "sea"],
  [2, "sea"],
  [3, "sea-stack"],
  [4, "sea"],
  [5, "sea"],
  [6, "sea"],
  [7, "sea"],
  [8, "sea"],
  [9, "sea"],
  [10, "sea-stack"],
  [11, "sea"],
  [12, "sea"],
  [13, "sea"],
  [14, "sea"],
  [15, "sea"],
  [16, "sea"],
  [17, "sea"],
  [18, "sea"],
  [19, "sea"],
  [20, "sea"],
  [21, "sea"],
  [22, "sea"],
  [23, "sea"],
  [24, "sea"],
  [25, "sea"],
  [26, "sea"],
  [27, "sea"],
  [28, "sea"],
  [29, "sea"],
  [30, "sea"],
  [31, "sea"],
]);

const ROW2 = new Map<number, TerrainType>([
  [0, "sea"],
  [1, "sea"],
  [2, "sea"],
  [3, "sea"],
  [4, "sea"],
  [5, "sea"],
  [6, "sea"],
  [7, "sea"],
  [8, "sea"],
  [9, "sea"],
  [10, "sea"],
  [11, "sea"],
  [12, "sea"],
  [13, "sea"],
  [14, "sea"],
  [15, "sea"],
  [16, "sea"],
  [17, "sea"],
  [18, "sea-stack"],
  [19, "sea"],
  [20, "sea"],
  [21, "sea"],
  [22, "sea-stack"],
  [23, "sea"],
  [24, "sea"],
  [25, "sea"],
  [26, "beach"],
  [27, "plain"],
  [28, "plain"],
  [29, "plain"],
  [30, "plain"],
  [31, "beach"],
]);

const ROW3 = new Map<number, TerrainType>([
  [0, "sea"],
  [1, "beach"],
  [2, "beach"],
  [3, "plain"],
  [4, "plain"],
  [5, "beach"],
  [6, "beach"],
  [7, "plain"],
  [8, "base-land"],
  [9, "plain"],
  [10, "plain"],
  [11, "plain"],
  [12, "plain"],
  [13, "forest"],
  [14, "plain"],
  [15, "beach"],
  [16, "beach"],
  [17, "sea"],
  [18, "sea"],
  [19, "sea"],
  [20, "sea"],
  [21, "sea"],
  [22, "sea"],
  [23, "sea"],
  [24, "beach"],
  [25, "plain"],
  [26, "forest"],
  [27, "plain"],
  [28, "plain"],
  [29, "power-plant"],
  [30, "plain"],
  [31, "beach"],
]);

const ROW4 = new Map<number, TerrainType>([
  [0, "sea"],
  [1, "forest"],
  [2, "road-south-east"],
  [3, "road-east-west"],
  [4, "hq"],
  [5, "power-plant"],
  [6, "road-east-west"],
  [7, "base-land"],
  [8, "road-east-west"],
  [9, "road-east-west"],
  [10, "road-east-west"],
  [11, "road-east-west"],
  [12, "power-plant"],
  [13, "road-east-west"],
  [14, "power-plant"],
  [15, "road-east-west"],
  [16, "road-east-west"],
  [17, "road-east-west"],
  [18, "base-air"],
  [19, "plain"],
  [20, "beach"],
  [21, "sea"],
  [22, "sea"],
  [23, "beach"],
  [24, "plain"],
  [25, "road-east"],
  [26, "road-east-west"],
  [27, "road-east-west"],
  [28, "power-plant"],
  [29, "road-east-west"],
  [30, "road-south-west"],
  [31, "plain"],
]);

const ROW5 = new Map<number, TerrainType>([
  [0, "sea"],
  [1, "plain"],
  [2, "power-plant"],
  [3, "plain"],
  [4, "power-plant"],
  [5, "plain"],
  [6, "base-land"],
  [7, "plain"],
  [8, "base-sea"],
  [9, "forest"],
  [10, "plain"],
  [11, "beach"],
  [12, "beach"],
  [13, "power-plant"],
  [14, "plain"],
  [15, "plain"],
  [16, "forest"],
  [17, "base-land"],
  [18, "plain"],
  [19, "forest"],
  [20, "beach"],
  [21, "sea"],
  [22, "sea"],
  [23, "sea"],
  [24, "beach"],
  [25, "power-plant"],
  [26, "power-plant"],
  [27, "sea"],
  [28, "sea"],
  [29, "plain"],
  [30, "base-air"],
  [31, "plain"],
]);

const ROW6 = new Map<number, TerrainType>([
  [0, "sea"],
  [1, "power-plant"],
  [2, "road-north-west"],
  [3, "beach"],
  [4, "beach"],
  [5, "sea"],
  [6, "sea"],
  [7, "sea"],
  [8, "sea"],
  [9, "sea"],
  [10, "sea"],
  [11, "sea"],
  [12, "sea"],
  [13, "sea"],
  [14, "sea"],
  [15, "sea"],
  [16, "sea"],
  [17, "sea"],
  [18, "beach"],
  [19, "beach"],
  [20, "sea"],
  [21, "sea"],
  [22, "sea"],
  [23, "sea"],
  [24, "sea"],
  [25, "beach"],
  [26, "beach"],
  [27, "sea"],
  [28, "sea"],
  [29, "base-land"],
  [30, "road-north-south"],
  [31, "hq"],
]);

const ROW7 = new Map<number, TerrainType>([
  [0, "sea"],
  [1, "sea"],
  [2, "sea"],
  [3, "sea"],
  [4, "sea"],
  [5, "sea"],
  [6, "sea"],
  [7, "sea"],
  [8, "sea"],
  [9, "sea"],
  [10, "sea"],
  [11, "sea"],
  [12, "sea"],
  [13, "sea"],
  [14, "sea"],
  [15, "sea"],
  [16, "sea"],
  [17, "sea"],
  [18, "sea"],
  [19, "sea"],
  [20, "sea"],
  [21, "sea"],
  [22, "sea"],
  [23, "sea"],
  [24, "sea"],
  [25, "sea"],
  [26, "sea"],
  [27, "sea"],
  [28, "sea"],
  [29, "plain"],
  [30, "base-land"],
  [31, "plain"],
]);

const ROW8 = new Map<number, TerrainType>([
  [0, "sea"],
  [1, "sea"],
  [2, "sea"],
  [3, "sea"],
  [4, "sea"],
  [5, "sea"],
  [6, "plain"],
  [7, "forest"],
  [8, "beach"],
  [9, "sea"],
  [10, "sea"],
  [11, "sea"],
  [12, "sea-stack"],
  [13, "sea"],
  [14, "sea"],
  [15, "sea"],
  [16, "beach"],
  [17, "sea"],
  [18, "sea"],
  [19, "sea"],
  [20, "sea"],
  [21, "sea"],
  [22, "sea"],
  [23, "sea"],
  [24, "sea-stack"],
  [25, "sea"],
  [26, "sea"],
  [27, "sea"],
  [28, "sea"],
  [29, "sea"],
  [30, "road-north-south"],
  [31, "base-land"],
]);

const ROW9 = new Map<number, TerrainType>([
  [0, "sea"],
  [1, "sea-stack"],
  [2, "sea"],
  [3, "sea"],
  [4, "beach"],
  [5, "plain"],
  [6, "base-land"],
  [7, "plain"],
  [8, "base-air"],
  [9, "beach"],
  [10, "sea"],
  [11, "sea"],
  [12, "sea"],
  [13, "sea"],
  [14, "sea"],
  [15, "beach"],
  [16, "power-plant"],
  [17, "beach"],
  [18, "beach"],
  [19, "sea"],
  [20, "sea"],
  [21, "sea"],
  [22, "sea-stack"],
  [23, "sea"],
  [24, "sea"],
  [25, "sea"],
  [26, "sea"],
  [27, "sea"],
  [28, "beach"],
  [29, "plain"],
  [30, "road-north-south"],
  [31, "plain"],
]);

const ROW10 = new Map<number, TerrainType>([
  [0, "sea"],
  [1, "sea"],
  [2, "sea"],
  [3, "sea"],
  [4, "plain"],
  [5, "power-plant"],
  [6, "plain"],
  [7, "forest"],
  [8, "plain"],
  [9, "beach"],
  [10, "sea"],
  [11, "sea"],
  [12, "sea"],
  [13, "sea-stack"],
  [14, "sea"],
  [15, "beach"],
  [16, "forest"],
  [17, "plain"],
  [18, "plain"],
  [19, "beach"],
  [20, "sea"],
  [21, "sea"],
  [22, "sea"],
  [23, "sea"],
  [24, "sea"],
  [25, "sea"],
  [26, "sea"],
  [27, "beach"],
  [28, "plain"],
  [29, "plain"],
  [30, "road-north-south"],
  [31, "forest"],
]);

const ROW11 = new Map<number, TerrainType>([
  [0, "sea"],
  [1, "sea"],
  [2, "sea"],
  [3, "sea"],
  [4, "sea"],
  [5, "plain"],
  [6, "power-plant"],
  [7, "sea"],
  [8, "sea"],
  [9, "sea"],
  [10, "sea"],
  [11, "beach"],
  [12, "sea"],
  [13, "sea"],
  [14, "sea"],
  [15, "plain"],
  [16, "plain"],
  [17, "plain"],
  [18, "base-air"],
  [19, "plain"],
  [20, "beach"],
  [21, "sea"],
  [22, "sea"],
  [23, "sea"],
  [24, "sea"],
  [25, "sea"],
  [26, "sea"],
  [27, "plain"],
  [28, "plain"],
  [29, "forest"],
  [30, "road-north-south"],
  [31, "plain"],
]);

const ROW12 = new Map<number, TerrainType>([
  [0, "sea"],
  [1, "beach"],
  [2, "plain"],
  [3, "plain"],
  [4, "sea"],
  [5, "sea"],
  [6, "sea"],
  [7, "sea"],
  [8, "sea"],
  [9, "sea"],
  [10, "sea"],
  [11, "power-plant"],
  [12, "beach"],
  [13, "sea"],
  [14, "sea"],
  [15, "plain"],
  [16, "plain"],
  [17, "base-land"],
  [18, "forest"],
  [19, "power-plant"],
  [20, "beach"],
  [21, "sea"],
  [22, "sea"],
  [23, "sea"],
  [24, "base-sea"],
  [25, "road-east-west"],
  [26, "base-land"],
  [27, "road-east-west"],
  [28, "road-east-west"],
  [29, "road-east-west"],
  [30, "power-plant"],
  [31, "plain"],
]);

const ROW13 = new Map<number, TerrainType>([
  [0, "sea"],
  [1, "forest"],
  [2, "plain"],
  [3, "power-plant"],
  [4, "sea"],
  [5, "sea"],
  [6, "sea"],
  [7, "sea"],
  [8, "base-air"],
  [9, "plain"],
  [10, "base-land"],
  [11, "plain"],
  [12, "power-plant"],
  [13, "sea"],
  [14, "sea"],
  [15, "sea"],
  [16, "power-plant"],
  [17, "beach"],
  [18, "beach"],
  [19, "sea"],
  [20, "sea"],
  [21, "sea"],
  [22, "sea"],
  [23, "beach"],
  [24, "plain"],
  [25, "plain"],
  [26, "forest"],
  [27, "plain"],
  [28, "plain"],
  [29, "power-plant"],
  [30, "plain"],
  [31, "beach"],
]);

const ROW14 = new Map<number, TerrainType>([
  [0, "sea"],
  [1, "power-plant"],
  [2, "power-plant"],
  [3, "beach"],
  [4, "sea"],
  [5, "sea"],
  [6, "beach"],
  [7, "base-land"],
  [8, "plain"],
  [9, "base-land"],
  [10, "plain"],
  [11, "plain"],
  [12, "base-sea"],
  [13, "sea"],
  [14, "sea"],
  [15, "sea"],
  [16, "sea"],
  [17, "sea"],
  [18, "sea"],
  [19, "sea"],
  [20, "sea"],
  [21, "sea"],
  [22, "sea"],
  [23, "beach"],
  [24, "forest"],
  [25, "power-plant"],
  [26, "plain"],
  [27, "power-plant"],
  [28, "plain"],
  [29, "beach"],
  [30, "beach"],
  [31, "sea"],
]);

const ROW15 = new Map<number, TerrainType>([
  [0, "sea"],
  [1, "sea"],
  [2, "plain"],
  [3, "beach"],
  [4, "sea-stack"],
  [5, "sea"],
  [6, "beach"],
  [7, "plain"],
  [8, "hq"],
  [9, "forest"],
  [10, "plain"],
  [11, "base-land"],
  [12, "sea"],
  [13, "sea"],
  [14, "sea"],
  [15, "sea"],
  [16, "sea"],
  [17, "sea"],
  [18, "sea"],
  [19, "sea"],
  [20, "sea-stack"],
  [21, "sea"],
  [22, "sea"],
  [23, "sea"],
  [24, "sea"],
  [25, "sea"],
  [26, "sea"],
  [27, "sea"],
  [28, "sea"],
  [29, "sea"],
  [30, "sea"],
  [31, "sea"],
]);

export const TERRITORY_REACHER: Territory = new Map([
  [0, ROW1],
  [1, ROW2],
  [2, ROW3],
  [3, ROW4],
  [4, ROW5],
  [5, ROW6],
  [6, ROW7],
  [7, ROW8],
  [8, ROW9],
  [9, ROW10],
  [10, ROW11],
  [11, ROW12],
  [12, ROW13],
  [13, ROW14],
  [14, ROW15],
]);
