import { Injectable } from '@angular/core';
import { _ } from 'underscore';

@Injectable()
export class ObjectsService {

  constructor() { }

  /**
   * Retrieve all the names of the object's own enumerable properties.
   */
  public keys(object: object): Array<string> {
    return _.keys(object);
  }

}
