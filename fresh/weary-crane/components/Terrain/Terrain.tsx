import { isLand, symbol } from "../../logic/terrain-logic.ts";
import { TerrainType } from "../../types/TerrainType.ts";
import TerrainBuilding from "../TerrainBuilding/TerrainBuilding.tsx";
import TerrainRoad from "../TerrainRoad/TerrainRoad.tsx";

export default function Terrain({ type }: { type: TerrainType }) {
  return (
    <div
      class={[
        "pointer-default",
        "hover:text-stone-50",
        "flex items-center justify-center h-full w-full",
        isLand(type) ? "bg-stone-400 hover:bg-stone-500" : "",
      ].join(" ")}
    >
      <TerrainRoad type={type} />
      <TerrainBuilding type={type} />
      <span class="pointer-events-none text-stone-950">
        {symbol(type)}
      </span>
    </div>
  );
}
