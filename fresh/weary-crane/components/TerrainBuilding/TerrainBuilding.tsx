import { TerrainType } from "../../types/TerrainType.ts";
import { buildingSymbol, isBuilding } from "../../logic/terrain-logic.ts";

export default function TerrainBuilding({ type }: { type: TerrainType }) {
  return (
    <>
      {isBuilding(type)
        ? (
          <div class="flex items-center justify-center h-full w-full border-2 border-stone-600 hover:text-stone-50">
            <span class="pointer-events-none">{buildingSymbol(type)}</span>
          </div>
        )
        : null}
    </>
  );
}
