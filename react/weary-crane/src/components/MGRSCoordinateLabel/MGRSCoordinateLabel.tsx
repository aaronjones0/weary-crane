import { MGRSCoordinate } from '@weary-crane/model/MGRSCoordinate';

export function MGRSCoordinateLabel({
  coordinate,
  text,
}: {
  coordinate: MGRSCoordinate;
  text?: string;
}) {
  return (
    <div className='flex flex-row gap-1 font-mono text-stone-500 dark:text-stone-500 cursor-default'>
      {text && <p className='pr-1 text-stone-400 dark:text-stone-600'>{text}:</p>}
      <p>{coordinate.UTMZ}</p>
      <p>{coordinate.SI_100KM}</p>
      <p>{coordinate.MEast}</p>
      <p>{coordinate.MNorth}</p>
    </div>
  );
}
