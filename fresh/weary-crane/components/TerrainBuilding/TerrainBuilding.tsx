import { TerrainType } from "../../types/TerrainType.ts";

export default function TerrainBuilding({ type }: { type: TerrainType }) {
  switch (type) {
    case "base-air":
      return (
        <div class="flex items-center justify-center h-full w-full border-2 border-stone-600">
          <span class="pointer-events-none">A</span>
        </div>
      );
    case "base-land":
      return (
        <div class="flex items-center justify-center h-full w-full border-2 border-stone-600">
          <span class="pointer-events-none">L</span>
        </div>
      );
    case "base-sea":
      return (
        <div class="flex items-center justify-center h-full w-full border-2 border-stone-600">
          <span class="pointer-events-none">S</span>
        </div>
      );
    case "hq":
      return (
        <div class="flex items-center justify-center h-full w-full border-2 border-stone-600">
          <span class="pointer-events-none">HQ</span>
        </div>
      );
    case "power-plant":
      return (
        <div class="flex items-center justify-center h-full w-full border-2 border-stone-600">
          <span class="pointer-events-none">P</span>
        </div>
      );
    default:
      return null;
  }
}
