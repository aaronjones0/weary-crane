import {
  TERRAIN_AIRPORT,
  TERRAIN_BEACH,
  TERRAIN_CITY_UNCAPTURED,
  TERRAIN_FACTORY,
  TERRAIN_FOREST,
  TERRAIN_HQ,
  TERRAIN_LAKE,
  TERRAIN_MOUNTAIN,
  TERRAIN_PLAIN,
  TERRAIN_RIVER,
  TERRAIN_ROAD,
  TERRAIN_ROAD_HORIZONTAL,
  TERRAIN_ROAD_VERTICAL,
  TERRAIN_SEA,
  TERRAIN_SEAPORT,
  TERRAIN_SEA_STACKS,
} from '@weary-crane/constants/terrain';
import { Terrain } from '@weary-crane/types/Terrain';
import { TerrainCategory } from '@weary-crane/types/TerrainCategory';

export function isLand(terrain: string): boolean {
  switch (terrain) {
    case TERRAIN_ROAD:
    case TERRAIN_ROAD_HORIZONTAL:
    case TERRAIN_ROAD_VERTICAL:
    case TERRAIN_HQ:
    case TERRAIN_FACTORY:
    case TERRAIN_AIRPORT:
    case TERRAIN_SEAPORT:
    case TERRAIN_PLAIN:
    case TERRAIN_FOREST:
    case TERRAIN_MOUNTAIN:
    case TERRAIN_CITY_UNCAPTURED:
      return true;
    case TERRAIN_RIVER:
    case TERRAIN_LAKE:
    case TERRAIN_SEA:
    case TERRAIN_BEACH:
    case TERRAIN_SEA_STACKS:
    default:
      return false;
  }
}

export function category(terrain: Terrain): TerrainCategory {
  switch (terrain) {
    case 'airbase':
    case 'beach':
    case 'forest':
    case 'hq':
    case 'landbase':
    case 'mountains':
    case 'plain':
    case 'powerplant':
    case 'river-all':
    case 'river-east':
    case 'river-east-west':
    case 'river-east-west-north':
    case 'river-east-west-south':
    case 'river-north':
    case 'river-north-east':
    case 'river-north-south':
    case 'river-north-south-east':
    case 'river-north-south-west':
    case 'river-north-west':
    case 'river-south':
    case 'river-south-east':
    case 'river-south-west':
    case 'river-west':
    case 'road-all':
    case 'road-north':
    case 'road-south':
    case 'road-east':
    case 'road-west':
    case 'road-east-west':
    case 'road-north-south':
    case 'road-east-west-north':
    case 'road-east-west-south':
    case 'road-north-south-west':
    case 'road-north-south-east':
    case 'road-north-west':
    case 'road-north-east':
    case 'road-south-east':
    case 'road-south-west':
      return 'land';
    case 'lake':
    case 'sea':
    case 'sea-stack':
    case 'seabase':
    default:
      return 'sea';
  }
}
