import Terrain from "../../components/Terrain/Terrain.tsx";
import Unit from "../../components/Unit/Unit.tsx";
import { TerrainType } from "../../types/TerrainType.ts";
import { UnitType } from "../../types/UnitType.ts";

export default function TerritoryMapTile(
  { terrain, unit }: { terrain: TerrainType; unit: UnitType | null },
) {
  return (
    <div class="relative h-8 w-8 bg-stone-300 hover:bg-stone-400/50 flex flex-col justify-center items-center pointer-default group">
      <div class="absolute h-8 w-8">
        <Terrain type={terrain} />
      </div>
      <div class="absolute flex items-center justify-items-center pointer-events-none">
        {unit && <Unit type={unit} />}
      </div>
    </div>
  );
}
