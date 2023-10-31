import Terrain from "../../components/Terrain/Terrain.tsx";
import Unit from "../../components/Unit/Unit.tsx";
import { TerrainType } from "../../types/TerrainType.ts";
import { UnitType } from "../../types/UnitType.ts";

export default function TerritoryMapTile(
  { terrain, unit, xAxisHover, yAxisHover, onMouseEnter, onMouseLeave }: {
    terrain: TerrainType;
    unit: UnitType | null;
    xAxisHover?: boolean;
    yAxisHover?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  },
) {
  return (
    <div
      class="relative h-8 w-8 bg-stone-300 hover:bg-stone-400/50 flex flex-col justify-center items-center pointer-default"
      onMouseEnter={onMouseEnter}
    >
      {yAxisHover && (
        <div class="absolute z-10 h-px left-0 right-0 bottom-0 bg-stone-500 pointer-events-none">
        </div>
      )}
      {xAxisHover && (
        <div class="absolute z-10 w-px left-0 top-0 bottom-0 bg-stone-500 pointer-events-none">
        </div>
      )}
      <div class="absolute h-8 w-8">
        <Terrain type={terrain} />
      </div>
      <div class="absolute flex items-center justify-items-center pointer-events-none">
        {unit && <Unit type={unit} />}
      </div>
    </div>
  );
}
