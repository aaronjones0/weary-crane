import { TerrainMap } from '../TerrainMap/TerrainMap';
import { VerticalAxis } from '../VerticalAxis/VerticalAxis';
import { HorizontalAxis } from '@weary-crane/components/HorizontalAxis/HorizontalAxis';

export function Map({
  height,
  width,
  terrainLogic,
}: {
  height: number;
  width: number;
  terrainLogic: () => string;
}) {
  return (
    <div className='flex flex-col items-start'>
      <div className='flex flex-row gap-4 items-center'>
        <div className='-rotate-90 whitespace-nowrap self-end justify-self-end w-0'>
        <p className='text-stone-600 ml-4 pl-0.5'>Meters North</p>
        </div>
        <VerticalAxis height={height} />
        <div className='grow'>
          <TerrainMap
            height={height}
            width={width}
            terrainLogic={terrainLogic}
          />
          <HorizontalAxis width={width} />
        </div>
      </div>
      <p className='text-stone-600 mt-6 ml-14 pt-1 pl-1'>Meters East</p>
    </div>
  );
}
