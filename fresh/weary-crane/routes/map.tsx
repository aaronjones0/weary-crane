import MGRSCoordinateLabel from "../components/MGRSCoordinateLabel/MGRSCoordinateLabel.tsx";
import { Tank } from "../components/Units/Tank/Tank.tsx";
import { TERRITORY_REACHER } from "../constants/territories/Reacher.ts";
import TerritoryMapTile from "../islands/TerritoryMapTile/TerritoryMapTile.tsx";

export default function MapPage() {
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
      <div class="flex flex-col items-center relative">
        <div class="self-center flex flex-col rounded-md overflow-hidden">
          {[...TERRITORY_REACHER.keys()].map((y) => (
            <div key={y} class="flex flex-row relative group">
              {
                /* <div class="absolute top-0 z-10 h-px w-full bg-stone-900 opacity-0 group-hover:opacity-100">
                </div> */
              }
              <div class="absolute bottom-0 z-10 h-px w-full bg-stone-900 opacity-0 group-hover:opacity-100">
              </div>
              {[...TERRITORY_REACHER.get(y)!.keys()].map((x) => (
                <TerritoryMapTile
                  key={`${x},${y}`}
                  terrain={TERRITORY_REACHER.get(y)
                    ? TERRITORY_REACHER.get(y)!.get(x)!
                    : "sea"}
                  unit={y === 2 && x === 4 ? "tank" : null}
                />
              ))}
            </div>
          ))}
        </div>
        <div class="flex flex-row z-20 absolute top-0 bottom-0 pointer-events-none">
          {[...TERRITORY_REACHER.get(0)!.keys()].map((y) => (
            <div
              key={`${y}-east`}
              class="h-full w-8 opacity-0 group-hover:opacity-100"
            >
              <div class="h-full w-px bg-stone-900"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
