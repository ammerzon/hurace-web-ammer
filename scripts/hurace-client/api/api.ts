export * from './races.service';
import { RacesService } from './races.service';
export * from './runs.service';
import { RunsService } from './runs.service';
export * from './seasons.service';
import { SeasonsService } from './seasons.service';
export * from './skiers.service';
import { SkiersService } from './skiers.service';
export const APIS = [RacesService, RunsService, SeasonsService, SkiersService];
