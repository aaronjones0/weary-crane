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
    <main className='flex min-h-screen flex-col items-center w-full p-24 bg-stone-50 dark:bg-stone-950'>
      <div
        className={[
          'w-full',
          'flex flex-col',
          'z-10 font-mono text-sm lg:flex bg-stone-100 dark:bg-stone-900',
          'p-8 rounded-2xl',
          'gap-4',
        ].join(' ')}
      >
        <h1 className='text-stone-600 dark:text-stone-400'>Weary Crane</h1>
        <MGRSCoordinateLabel coordinate={US_HI_HONOLULU} />
        {/* <div className='self-center grid grid-flow-row grid-cols-12 grid-rows-6'>
          <MapTile contents={TERRAIN_SEA} />
          <MapTile contents={TERRAIN_SEA} />
          <MapTile contents={TERRAIN_RIVER} />
          <MapTile contents={TERRAIN_FOREST} />
          <MapTile contents={TERRAIN_PLAIN} />
          <MapTile contents={TERRAIN_RIVER} />
          <MapTile contents={TERRAIN_PLAIN} />
          <MapTile contents={TERRAIN_FOREST} />
          <MapTile contents={TERRAIN_FOREST} />
          <MapTile contents={TERRAIN_SEA} />
          <MapTile contents={TERRAIN_SEA} />
          <MapTile contents={TERRAIN_SEA} />
          <MapTile contents={TERRAIN_SEA} />
          <MapTile contents={TERRAIN_PLAIN} />
          <MapTile contents={TERRAIN_RIVER} />
          <MapTile contents={TERRAIN_ROAD} />
          <MapTile contents={TERRAIN_RIVER} />
          <MapTile contents={TERRAIN_RIVER} />
          <MapTile contents={TERRAIN_PLAIN} />
          <MapTile contents={TERRAIN_MOUNTAIN} />
          <MapTile contents={TERRAIN_FOREST} />
          <MapTile contents={TERRAIN_PLAIN} />
          <MapTile contents={TERRAIN_FOREST} />
          <MapTile contents={TERRAIN_MOUNTAIN} />
          <MapTile contents={TERRAIN_PLAIN} />
          <MapTile contents={TERRAIN_HQ} />
          <MapTile contents={TERRAIN_PLAIN} />
          <MapTile contents={TERRAIN_ROAD} />
          <MapTile contents={TERRAIN_PLAIN} />
          <MapTile contents={TERRAIN_LAKE} />
          <MapTile contents={TERRAIN_MOUNTAIN} />
          <MapTile contents={TERRAIN_MOUNTAIN} />
          <MapTile contents={TERRAIN_FOREST} />
          <MapTile contents={TERRAIN_PLAIN} />
          <MapTile contents={TERRAIN_PLAIN} />
          <MapTile contents={TERRAIN_MOUNTAIN} />
          <MapTile contents={TERRAIN_BEACH} />
          <MapTile contents={TERRAIN_BEACH} />
          <MapTile contents={TERRAIN_RIVER} />
          <MapTile contents={TERRAIN_ROAD} />
          <MapTile contents={TERRAIN_PLAIN} />
          <MapTile contents={TERRAIN_FOREST} />
          <MapTile contents={TERRAIN_FOREST} />
          <MapTile contents={TERRAIN_MOUNTAIN} />
          <MapTile contents={TERRAIN_MOUNTAIN} />
          <MapTile contents={TERRAIN_PLAIN} />
          <MapTile contents={TERRAIN_PLAIN} />
          <MapTile contents={TERRAIN_MOUNTAIN} />
          <MapTile contents={TERRAIN_BEACH} />
          <MapTile contents={TERRAIN_SEA} />
          <MapTile contents={TERRAIN_SEA} />
          <MapTile contents={TERRAIN_ROAD} />
          <MapTile contents={TERRAIN_ROAD} />
          <MapTile contents={TERRAIN_ROAD} />
          <MapTile contents={TERRAIN_ROAD} />
          <MapTile contents={TERRAIN_MOUNTAIN} />
          <MapTile contents={TERRAIN_MOUNTAIN} />
          <MapTile contents={TERRAIN_PLAIN} />
          <MapTile contents={TERRAIN_BEACH} />
          <MapTile contents={TERRAIN_SEA} />
          <MapTile contents={TERRAIN_BEACH} />
          <MapTile contents={TERRAIN_BEACH} />
          <MapTile contents={TERRAIN_SEA} />
          <MapTile contents={TERRAIN_BEACH} />
          <MapTile contents={TERRAIN_PLAIN} />
          <MapTile contents={TERRAIN_CITY_UNCAPTURED} />
          <MapTile contents={TERRAIN_CITY_UNCAPTURED} />
          <MapTile contents={TERRAIN_MOUNTAIN} />
          <MapTile contents={TERRAIN_FOREST} />
          <MapTile contents={TERRAIN_PLAIN} />
          <MapTile contents={TERRAIN_RIVER} />
          <MapTile contents={TERRAIN_SEA} />
        </div> */}
        <div className='flex flex-row gap-4 items-center'>
          <div className='flex flex-col-reverse w-full'>
            {Array.from(new Array(mapHeight)).map((row, y) => (
              <div key={y} className='h-6 flex flex-row items-top justify-end'>
                <p className='text-right text-stone-500'>{(10000 * y).toString().padStart(6, '0')}</p>
              </div>
            ))}
          </div>
          <Map height={mapHeight} width={mapWidth} terrainLogic={randomTile} />
        </div>
      </div>
    </main>
  );
}

