import { US_HI_HONOLULU } from '@weary-crane/constants/locations';
import {
  TERRAIN_BEACH,
  TERRAIN_CITY_UNCAPTURED,
  TERRAIN_FOREST,
  TERRAIN_HQ,
  TERRAIN_LAKE,
  TERRAIN_MOUNTAIN,
  TERRAIN_PLAIN,
  TERRAIN_RIVER,
  TERRAIN_ROAD,
  TERRAIN_SEA,
} from '@weary-crane/constants/terrain';
import { MGRSCoordinateLabel } from '../components/MGRSCoordinateLabel/MGRSCoordinateLabel';
import { Map } from '../components/Map/Map';

export default function Home() {
  const mapHeight = 30;
  const mapWidth = 50;

  function randomTile(): string {
    const r = Math.floor(Math.random() * 10);

    switch (r) {
      case 0:
        return TERRAIN_BEACH;
      case 1:
        return TERRAIN_CITY_UNCAPTURED;
      case 2:
        return TERRAIN_FOREST;
      case 3:
        return TERRAIN_HQ;
      case 4:
        return TERRAIN_LAKE;
      case 5:
        return TERRAIN_MOUNTAIN;
      case 6:
        return TERRAIN_PLAIN;
      case 7:
        return TERRAIN_RIVER;
      case 8:
        return TERRAIN_ROAD;
      case 9:
      default:
        return TERRAIN_SEA;
    }
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-center w-full py-12 px-24 bg-stone-50 dark:bg-stone-950'>
      <div
        className={[
          // 'w-full',
          'flex flex-col',
          'z-10 font-mono text-sm lg:flex bg-stone-100 dark:bg-stone-900',
          'pl-5 pr-10 py-3 rounded-md',
          'gap-4',
        ].join(' ')}
      >
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col'>
            <small className='text-stone-400 dark:text-stone-600 -mb-2'>
              Territory:
            </small>
            <h1 className='text-stone-600 dark:text-stone-400 text-xl'>
              Weary Crane
            </h1>
            <small className='text-stone-400 dark:text-stone-600 -mb-1'>
              MGRS Coordinate:
            </small>
            <MGRSCoordinateLabel coordinate={US_HI_HONOLULU} />
          </div>
          <div className='flex flex-col items-end'>
            <small className='text-stone-400 dark:text-stone-600 -mb-1'>
              Map Resolution:
            </small>
            <p className='text-stone-500'>1000m</p>
          </div>
        </div>
        <div className='flex justify-center'>
          <Map height={mapHeight} width={mapWidth} terrainLogic={randomTile} />
        </div>
      </div>
    </main>
  );
}

