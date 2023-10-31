import TerritoryMapTile from "../TerritoryMapTile/TerritoryMapTile.tsx";
import { TerrainType } from "../../types/TerrainType.ts";
import { StateUpdater } from "https://esm.sh/v128/preact@10.18.1/hooks/src/index.js";

export function TerritoryMapRow({
  /**
   * Row Index
   */
  y,
  /**
   * A full row of Territory Map Tiles
   */
  row,
  xHover,
  setXHover,
  yHover,
  setYHover,
}: {
  y: number;
  row: Map<number, TerrainType>;
  xHover: number | null;
  setXHover: StateUpdater<number | null>;
  yHover: number | null;
  setYHover: StateUpdater<number | null>;
}) {
  return (
    <div class="flex flex-row relative group">
      {
        /* <div class="absolute top-0 z-10 h-px w-full bg-stone-900 opacity-0 group-hover:opacity-100">
      </div> */
      }
      {
        /* <div class="absolute bottom-0 z-10 h-px w-full bg-stone-900 opacity-0 group-hover:opacity-100">
      </div> */
      }
      {[...row.keys()].map((x) => (
        <TerritoryMapTile
          key={`${x},${y}`}
          terrain={row.get(x)!}
          unit={y === 2 && x === 4 ? "tank" : null}
          xAxisHover={x === xHover}
          yAxisHover={y === yHover}
          onMouseEnter={() => {
            setXHover(x);
            setYHover(y);
          }}
        />
      ))}
    </div>
  );
}
