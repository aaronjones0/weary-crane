import MapTile from '@weary-crane/components/MapTile/MapTile';

export function TerrainMap({
  height,
  width,
  terrainLogic,
}: {
  height: number;
  width: number;
  terrainLogic: () => string;
}) {
  return (
    <div className='w-full h-full flex flex-col items-center gap-1'>
      {Array.from(new Array(height)).map((row, y) => (
        <div key={y} className='h-full flex flex-row gap-1'>
          {Array.from(new Array(width)).map((column, x) => (
            <MapTile key={`(${x}, ${y})`} contents={terrainLogic()} />
          ))}
        </div>
      ))}
    </div>
  );
}
