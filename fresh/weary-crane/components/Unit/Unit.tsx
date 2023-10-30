import { UnitType } from "../../types/UnitType.ts";
import { Tank } from "../Units/Tank/Tank.tsx";

export default function Unit({ type }: { type: UnitType }) {
  return (
    <div>
      {unitGraphic(type)}
    </div>
  );
}

export function unitGraphic(type: UnitType) {
  switch (type) {
    case "tank":
      return <Tank />;
    default:
      return null;
  }
}
