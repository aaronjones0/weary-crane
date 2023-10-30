import { TerrainType } from "../../types/TerrainType.ts";

export default function TerrainRoad({ type }: { type: TerrainType }) {
  switch (type) {
    case "road-east-west":
      return <div class="h-5 w-full bg-stone-600"></div>;
    case "road-north-south":
      return <div class="h-full w-5 bg-stone-600"></div>;
    case "road-north":
      return null;
    case "road-east":
      return <div class="ml-1.5 h-5 w-full bg-stone-600 rounded-l-full"></div>;
    case "road-south":
      return null;
    case "road-west":
      return null;
    case "road-north-west":
      return (
        <div class="relative h-full w-full overflow-hidden">
          <div class="absolute h-8 w-5 left-1.5 bottom-1.5 bg-stone-600 rounded-br-xl"></div>
          <div class="absolute h-5 w-8 right-1.5 top-1.5 bg-stone-600 rounded-br-xl"></div>
        </div>
      );
    case "road-north-east":
      return null;
    case "road-south-west":
      return (
        <div class="relative h-full w-full overflow-hidden">
          <div class="absolute h-5 w-8 right-1.5 top-1.5 bg-stone-600 rounded-tr-xl">
          </div>
          <div class="absolute h-8 w-5 left-1.5 top-1.5 bg-stone-600 rounded-tr-xl">
          </div>
        </div>
      );
    case "road-south-east":
      return (
        <div class="relative h-full w-full overflow-hidden">
          <div class="absolute h-5 w-full left-1.5 top-1.5 bg-stone-600 rounded-tl-xl">
          </div>
          <div class="absolute h-8 w-5 left-1.5 top-1.5 bg-stone-600 rounded-tl-xl">
          </div>
        </div>
      );
    case "road-north-south-west":
      return null;
    case "road-north-east-west":
      return null;
    case "road-north-south-east":
      return null;
    case "road-south-east-west":
    default:
      return null;
  }
}
