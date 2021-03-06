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
import { RaceType } from './raceType';
import { Gender } from './gender';
import { Location } from './location';


export interface SkiEvent { 
    location?: Location | null;
    startDate?: Date;
    endDate?: Date;
    raceTypes?: Array<RaceType> | null;
    genders?: Array<Gender> | null;
}

