import { Injectable } from '@angular/core';
import { _ } from 'underscore';

@Injectable()
export class HelperService {

  constructor() { }

  public each(array, delegate) {
    return _.each(array, delegate);
  }

}
