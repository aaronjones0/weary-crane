import MapTile from '@weary-crane/components/MapTile/MapTile';
import { US_HI_HONOLULU } from '@weary-crane/constants/locations';
import { TERRAIN_BEACH, TERRAIN_CITY_UNCAPTURED, TERRAIN_FOREST, TERRAIN_HQ, TERRAIN_LAKE, TERRAIN_MOUNTAIN, TERRAIN_PLAIN, TERRAIN_RIVER, TERRAIN_ROAD, TERRAIN_SEA } from '@weary-crane/constants/terrain';

export default function Home() {

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-stone-50 dark:bg-stone-950'>
      <div
        className={[
          'flex flex-col',
          'z-10 max-w-5xl w-full font-mono text-sm lg:flex bg-stone-100 dark:bg-stone-900',
          'p-8 rounded-2xl',
          'gap-4',
        ].join(' ')}
      >
        <h1 className='text-stone-600 dark:text-stone-400'>Weary Crane</h1>
        <div className='flex flex-row gap-1 font-mono text-stone-400 dark:text-stone-600 cursor-default'>
          <p>{US_HI_HONOLULU.UTMZ}</p>
          <p>{US_HI_HONOLULU.SI_100KM}</p>
          <p>{US_HI_HONOLULU.MEast}</p>
          <p>{US_HI_HONOLULU.MNorth}</p>
        </div>
        <div className='self-center grid grid-flow-row grid-cols-12 grid-rows-6'>
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
        </div>
      </div>
    </main>
  );
}

