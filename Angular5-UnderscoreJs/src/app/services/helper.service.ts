import { ArraysService } from './arrays';
import { CollectionsService } from './collections';
import { FunctionsService } from './functions';
import { Injectable } from '@angular/core';
import { ObjectsService } from './objects';
import { _ } from 'underscore';

@Injectable()
export class HelperService {

  constructor(public readonly Collections: CollectionsService,
              public readonly Arrays: ArraysService,
              public readonly Functions: FunctionsService,
              public readonly Objects: ObjectsService) { 
  }
}