import { useState } from "preact/hooks";
import { MGRSCursorLabel } from "../../components/MGRSCursorLabel/MGRSCursorLabel.tsx";
import { TERRITORY_REACHER } from "../../constants/territories/Reacher.ts";
import { TerritoryMapRow } from "../TerritoryMapRow/TerritoryMapRow.tsx";

export function TerritoryMap() {
  const mapHeight = TERRITORY_REACHER.size;

  /**
   * X-Axis Hover Index
   */
  const [xHover, setXHover] = useState<number | null>(null);

  /**
   * Y-Axis Hover Index
   */
  const [yHover, setYHover] = useState<number | null>(null);

  return (
    <div class="self-center flex flex-col rounded-sm overflow-hidden">
      <MGRSCursorLabel x={xHover ?? 0} y={mapHeight - 1 - (yHover ?? 0)} />
      {[...TERRITORY_REACHER.keys()].map((y) => (
        <TerritoryMapRow
          key={y}
          y={y}
          row={TERRITORY_REACHER.get(y)!}
          xHover={xHover}
          setXHover={setXHover}
          yHover={yHover}
          setYHover={setYHover}
        />
      ))}
    </div>
  );
}
