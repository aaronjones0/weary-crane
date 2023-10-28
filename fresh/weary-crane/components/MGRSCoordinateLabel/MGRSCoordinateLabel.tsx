export default function MGRSCoordinateLabel(
  { GridZone, SquareIdentification, Eastering, Northering }: {
    GridZone: string;
    SquareIdentification: string;
    Eastering: number;
    Northering: number;
  },
) {
  return (
    <div class="flex flex-row gap-1 font-mono text-stone-600">
      <p>{GridZone}</p>
      <p>{SquareIdentification}</p>
      <p>{Eastering}</p>
      <p>{Northering}</p>
    </div>
  );
}
