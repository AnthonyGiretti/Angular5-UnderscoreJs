import { ArraysService } from './arrays';
import { CollectionsService } from './collections';
import { FunctionsService } from './functions';
import { Injectable } from '@angular/core';
import { ObjectsService } from './objects';
import { UtilityService } from './utility';

@Injectable()
export class HelpersService {

  public readonly Collections: CollectionsService;
  public readonly Arrays: ArraysService;
  public readonly Functions: FunctionsService;
  public readonly Objects: ObjectsService;
  public readonly Utility: UtilityService;

  constructor() { 
    this.Collections = new CollectionsService();
    this.Arrays = new ArraysService();
    this.Functions = new FunctionsService();
    this.Objects = new ObjectsService();
    this.Utility = new UtilityService();   
  }
}