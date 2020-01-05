export * from './race.service';
import { RaceService } from './race.service';
export * from './run.service';
import { RunService } from './run.service';
export * from './skier.service';
import { SkierService } from './skier.service';
export const APIS = [RaceService, RunService, SkierService];
