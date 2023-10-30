import MGRSCoordinateLabel from "../components/MGRSCoordinateLabel/MGRSCoordinateLabel.tsx";
import { TERRITORY_REACHER } from "../constants/territories/Reacher.ts";
import TerritoryMapTile from "../islands/TerritoryMapTile/TerritoryMapTile.tsx";
import { Tank } from "../components/Units/Tank/Tank.tsx";

export default function MapPage() {
  const width = 32;
  const height = 13;
  return (
    <div class="flex flex-col justify-center p-16">
      <h1 class="text-3xl font-black text-stone-600">Reacher</h1>
      <MGRSCoordinateLabel
        GridZone="7G"
        SquareIdentification="AB"
        Eastering={123456}
        Northering={789012}
      />
      <Tank />
      <div class="flex flex-col">
        {[...TERRITORY_REACHER.keys()].map((y) => (
          <div key={y} class="flex flex-row">
            {[...TERRITORY_REACHER.get(y)!.keys()].map((x) => (
              <TerritoryMapTile
                key={`${y},${x}`}
                terrain={TERRITORY_REACHER.get(y)
                  ? TERRITORY_REACHER.get(y)!.get(x)!
                  : "sea"}
                unit={y === 2 && x === 4 ? "tank" : null}
              />
            ))}
          </div>
        ))}
        {
          /* {Array.from(new Array(height)).map((v, y) => (
          <div class="flex flex-row">
            {Array.from(new Array(width)).map((v, x) => (
              <TerritoryMapTile
                key={`${x},${y}}`}
                terrain="sea"
                unit={null}
              />
            ))}
          </div>
        ))} */
        }
      </div>
    </div>
  );
}
