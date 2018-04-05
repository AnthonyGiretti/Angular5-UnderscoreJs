import { Injectable } from '@angular/core';
import { _ } from 'underscore';

@Injectable()
export class CollectionsService {

  constructor() { }

  public each(array, delegate): any {
    return _.each(array, delegate);
  }

}