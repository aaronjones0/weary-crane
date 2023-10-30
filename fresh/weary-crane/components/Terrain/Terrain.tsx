import { TerrainType } from "../../types/TerrainType.ts";
import TerrainBuilding from "../TerrainBuilding/TerrainBuilding.tsx";
import TerrainRoad from "../TerrainRoad/TerrainRoad.tsx";

export default function Terrain({ type }: { type: TerrainType }) {
  return (
    <div
      class={[
        "group",
        "pointer-default",
        "flex items-center justify-center h-full w-full",
        isLand(type) ? "bg-stone-400 hover:bg-stone-500" : "",
      ].join(" ")}
    >
      <TerrainRoad type={type} />
      <TerrainBuilding type={type} />
      <span class="pointer-events-none text-stone-950 group-hover:text-stone-50">{symbol(type)}</span>
    </div>
  );
}

export function isLand(terrainType: TerrainType): boolean {
  switch (terrainType) {
    case "sea":
    case "sea-stack":
    case "beach":
    case "lake":
    case "river":
    default:
      return false;
    case "forest":
    case "plain":
    case "mountains":
    case "hq":
    case "base-land":
    case "base-air":
    case "base-sea":
    case "power-plant":
    case "road-east-west":
    case "road-north-south":
    case "road-north":
    case "road-east":
    case "road-south":
    case "road-west":
    case "road-north-west":
    case "road-north-east":
    case "road-south-west":
    case "road-south-east":
    case "road-north-south-west":
    case "road-north-east-west":
    case "road-north-south-east":
    case "road-south-east-west":
      return true;
  }
}

export function symbol(terrainType: TerrainType): string {
  switch (terrainType) {
    case "forest":
      return "\u219F\u219F";
    case "sea-stack":
      return String.fromCodePoint(0x1F7C2);
    case "beach":
      return "\u25B1";
    case "river":
      return "\u2F2E";
    case "lake":
      return "\u328C";
    case "plain":
      return "";
    case "mountains":
      return "\u26F0";
    case "hq":
      return "";
    case "base-land":
      return "";
    case "base-air":
      return "";
    case "base-sea":
      return "";
    case "power-plant":
      return "";
    case "road-east-west":
      return "";
    case "road-north-south":
      return "";
    case "road-north":
      return "v";
    case "road-east":
      return "";
    case "road-south":
      return "^";
    case "road-west":
      return ">";
    case "road-north-west":
      return "";
    case "road-north-east":
      return "^>";
    case "road-south-west":
      return "";
    case "road-south-east":
      return "";
    case "road-north-south-west":
      return "-|";
    case "road-north-east-west":
      return "-^-";
    case "road-north-south-east":
      return "\uA714";
    case "road-south-east-west":
      return "-v-";
    case "sea":
    default:
      return "";
  }
}
