import { CollectionsService } from './collections';
import { Injectable } from '@angular/core';
import { _ } from 'underscore';

@Injectable()
export class HelperService {

  constructor(public readonly Collections: CollectionsService) { 
  }
}