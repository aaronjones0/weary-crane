import { MGRSCoordinate } from '@weary-crane/model/MGRSCoordinate';

export function MGRSCoordinateLabel({ coordinate }: { coordinate: MGRSCoordinate; }) {
  return (
    <div className='flex flex-row gap-1 font-mono text-stone-400 dark:text-stone-600 cursor-default'>
      <p>{coordinate.UTMZ}</p>
      <p>{coordinate.SI_100KM}</p>
      <p>{coordinate.MEast}</p>
      <p>{coordinate.MNorth}</p>
    </div>
  );
}
