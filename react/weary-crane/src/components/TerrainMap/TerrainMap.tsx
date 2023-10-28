import TerrainTile from '@weary-crane/components/TerrainTile/TerrainTile';
import RoadAll from '../Roads/RoadAll';
import {
  TERRAIN_ROAD_ALL,
  TERRAIN_ROAD_EAST,
  TERRAIN_ROAD_EAST_WEST,
  TERRAIN_ROAD_EAST_WEST_NORTH,
  TERRAIN_ROAD_EAST_WEST_SOUTH,
  TERRAIN_ROAD_NORTH,
  TERRAIN_ROAD_NORTH_EAST,
  TERRAIN_ROAD_NORTH_SOUTH,
  TERRAIN_ROAD_NORTH_SOUTH_EAST,
  TERRAIN_ROAD_NORTH_SOUTH_WEST,
  TERRAIN_ROAD_NORTH_WEST,
  TERRAIN_ROAD_SOUTH,
  TERRAIN_ROAD_SOUTH_EAST,
  TERRAIN_ROAD_SOUTH_WEST,
  TERRAIN_ROAD_WEST,
} from '@weary-crane/constants/terrain';
import RoadEast from '../Roads/RoadEast';
import RoadEastWest from '../Roads/RoadEastWest';
import RoadEastWestNorth from '../Roads/RoadEastWestNorth';
import RoadEastWestSouth from '../Roads/RoadEastWestSouth';
import RoadNorth from '../Roads/RoadNorth';
import RoadNorthEast from '../Roads/RoadNorthEast';
import RoadNorthSouth from '../Roads/RoadNorthSouth';
import RoadNorthSouthEast from '../Roads/RoadNorthSouthEast';
import RoadNorthSouthWest from '../Roads/RoadNorthSouthWest';
import RoadNorthWest from '../Roads/RoadNorthWest';
import RoadSouth from '../Roads/RoadSouth';
import RoadSouthEast from '../Roads/RoadSouthEast';
import RoadSouthWest from '../Roads/RoadSouthWest';
import RoadWest from '../Roads/RoadWest';
import MapTile from '../MapTile/MapTile';

export function TerrainMap({
  height,
  width,
  terrainLogic,
}: {
  height: number;
  width: number;
  terrainLogic: (x: number, y: number) => string;
}) {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      {Array.from(new Array(height)).map((row, y) => (
        <div key={y} className='h-full flex flex-row'>
          {Array.from(new Array(width)).map((column, x) => {
            const k = `(${x},${y})`;
            switch (terrainLogic(x, y)) {
              case TERRAIN_ROAD_ALL:
                return <RoadAll key={k} />;
              case TERRAIN_ROAD_EAST:
                return <RoadEast key={k} />;
              case TERRAIN_ROAD_EAST_WEST:
                return <RoadEastWest key={k} />;
              case TERRAIN_ROAD_EAST_WEST_NORTH:
                return <RoadEastWestNorth key={k} />;
              case TERRAIN_ROAD_EAST_WEST_SOUTH:
                return <RoadEastWestSouth key={k} />;
              case TERRAIN_ROAD_NORTH:
                return <RoadNorth key={k} />;
              case TERRAIN_ROAD_NORTH_EAST:
                return <RoadNorthEast key={k} />;
              case TERRAIN_ROAD_NORTH_SOUTH:
                return <RoadNorthSouth key={k} />;
              case TERRAIN_ROAD_NORTH_SOUTH_EAST:
                return <RoadNorthSouthEast key={k} />;
              case TERRAIN_ROAD_NORTH_SOUTH_WEST:
                return <RoadNorthSouthWest key={k} />;
              case TERRAIN_ROAD_NORTH_WEST:
                return <RoadNorthWest key={k} />;
              case TERRAIN_ROAD_SOUTH:
                return <RoadSouth key={k} />;
              case TERRAIN_ROAD_SOUTH_EAST:
                return <RoadSouthEast key={k} />;
              case TERRAIN_ROAD_SOUTH_WEST:
                return <RoadSouthWest key={k} />;
              case TERRAIN_ROAD_WEST:
                return <RoadWest key={k} />;
              default:
                return (
                  <MapTile key={`(${x}, ${y})`} contents={terrainLogic(x, y)} />
                  // <TerrainTile key={`(${x}, ${y})`} contents={terrainLogic(x, y)} />
                );
            }
          })}
        </div>
      ))}
    </div>
  );
}
