import MGRSCoordinateLabel from "../components/MGRSCoordinateLabel/MGRSCoordinateLabel.tsx";
import TerritoryMapTile from "../islands/TerritoryMapTile/TerritoryMapTile.tsx";

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
      <div class="flex flex-col">
        {Array.from(new Array(height)).map((v, y) => (
          <div class="flex flex-row">
            {Array.from(new Array(width)).map((v, x) => (
              <TerritoryMapTile
                key={`${x},${y}}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
