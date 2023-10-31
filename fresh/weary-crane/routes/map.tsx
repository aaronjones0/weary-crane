import MGRSCoordinateLabel from "../components/MGRSCoordinateLabel/MGRSCoordinateLabel.tsx";
import { Tank } from "../components/Units/Tank/Tank.tsx";
import { TerritoryMap } from "../islands/TerritoryMap/TerritoryMap.tsx";

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
        <TerritoryMap />
      </div>
    </div>
  );
}
