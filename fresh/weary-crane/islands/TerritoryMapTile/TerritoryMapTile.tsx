import Terrain from "../../components/Terrain/Terrain.tsx";
import Unit from "../../components/Unit/Unit.tsx";
import { TerrainType } from "../../types/TerrainType.ts";
import { UnitType } from "../../types/UnitType.ts";

export default function TerritoryMapTile(
  { terrain, unit }: { terrain: TerrainType; unit: UnitType | null },
) {
  return (
    <div class="relative h-8 w-8 bg-stone-300 hover:bg-stone-400/50 flex flex-col justify-center items-center pointer-default group">
      <div class="absolute">
        <Terrain type={terrain} />
      </div>
      <div class="absolute">
        {unit && <Unit type={unit} />}
      </div>
      {
        /* <span class="pointer-events-none text-stone-400 group-hover:text-stone-600">
      </span> */
      }
    </div>
  );
}
