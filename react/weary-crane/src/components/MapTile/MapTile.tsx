export default function MapTile({ contents }: { contents: string }) {
  return (
    // <div
    //   className={[
    //     'h-12 w-12 flex items-center justify-center p-2 rounded-lg',
    //     'bg-stone-300 dark:bg-stone-700 hover:bg-stone-400 dark:hover:bg-stone-600',
    //     'border-t border-stone-400 dark:border-stone-600 hover:border-stone-300 dark:hover:border-stone-500',
    //     'shadow-lg shadow-stone-950/10 dark:shadow-stone-950/75',
    //     'font-mono text-stone-600 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300',
    //   ].join(' ')}
    // >
    //   <p className='pointer-events-none text-3xl'>{contents}</p>
    // </div>
    // h-6 w-6
    <div className='relative flex cursor-default'>
      <span className='absolute rounded-full bg-stone-700/10 h-1 w-1 -ml-0.5 -mt-0.5'>&nbsp;</span>
      <span className='absolute right-0 rounded-full bg-stone-700/10 h-1 w-1 -mr-0.5 -mt-0.5'>&nbsp;</span>
      <span className='absolute right-0 bottom-0 rounded-full bg-stone-700/10 h-1 w-1 -mr-0.5 -mb-0.5'>&nbsp;</span>
      <span className='absolute bottom-0 rounded-full bg-stone-700/10 h-1 w-1 -ml-0.5 -mb-0.5'>&nbsp;</span>
      <div
        className={[
          'h-5 w-5',
          'flex items-center justify-center rounded-lg',
          'bg-stone-300 dark:bg-stone-900 hover:bg-stone-400 dark:hover:bg-stone-800',
          'font-mono text-stone-600 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300',
        ].join(' ')}
      >
        <p className='pointer-events-none text-lg'>{contents}</p>
      </div>
    </div>
  );
}
