import { isLand } from '@weary-crane/logic/terrain-logic';
import { Terrain } from '@weary-crane/types/Terrain';

export default function TerrainTile({
  contents,
  type,
}: {
  contents?: string;
  type?: Terrain;
}) {
  return (
    <div className='relative flex cursor-default'>
      {/* <span className='absolute rounded-full bg-stone-700/10 h-1 w-1 -ml-0.5 -mt-0.5'>
        &nbsp;
      </span>
      <span className='absolute right-0 rounded-full bg-stone-700/10 h-1 w-1 -mr-0.5 -mt-0.5'>
        &nbsp;
      </span>
      <span className='absolute right-0 bottom-0 rounded-full bg-stone-700/10 h-1 w-1 -mr-0.5 -mb-0.5'>
        &nbsp;
      </span>
      <span className='absolute bottom-0 rounded-full bg-stone-700/10 h-1 w-1 -ml-0.5 -mb-0.5'>
        &nbsp;
      </span> */}
      {contents && (
        <div
          className={[
            'h-6 w-6',
            'flex items-center justify-center',
            isLand(contents ?? '')
              ? 'bg-stone-500 dark:bg-stone-700 hover:bg-stone-600 dark:hover:bg-stone-600'
              : 'bg-stone-300 dark:bg-stone-900 hover:bg-stone-400 dark:hover:bg-stone-800',
            'font-mono text-stone-600 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300',
          ].join(' ')}
        >
          <p className='pointer-events-none text-lg'>{contents}</p>
        </div>
      )}
      {type && (
        <div
          className={[
            'h-6 w-6',
            'flex items-center justify-center',
            isLand(contents ?? '')
              ? 'bg-stone-500 dark:bg-stone-700 hover:bg-stone-600 dark:hover:bg-stone-600'
              : 'bg-stone-300 dark:bg-stone-900 hover:bg-stone-400 dark:hover:bg-stone-800',
            'font-mono text-stone-600 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300',
          ].join(' ')}
        ></div>
      )}
    </div>
  );
}
