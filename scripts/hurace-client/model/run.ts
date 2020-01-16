/**
 * Hurace API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Race } from './race';
import { RunStatus } from './runStatus';
import { Skier } from './skier';


export interface Run { 
    skier?: Skier | null;
    race?: Race | null;
    runNumber?: number;
    startPosition?: number;
    endPosition?: number;
    status?: RunStatus;
    totalTime?: number;
    id?: number;
}

