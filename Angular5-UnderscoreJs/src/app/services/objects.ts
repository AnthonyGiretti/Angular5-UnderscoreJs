import { Injectable } from '@angular/core';
import { _ } from 'underscore';

@Injectable()
export class ObjectsService {

  constructor() { }

  /**
   * Retrieve all the names of the object's own enumerable properties.
   */
  public keys(object: Object): Array<String> {
    return _.keys(object);
  }

  /**
   * Retrieve all the names of object's own and inherited properties.
   */
  public allKeys(object: Object): Array<String> {
    return _.allKeys(object);
  }

  /**
   * Return all of the values of the object's own properties.
   * @param object 
   */
  public values(object: Object): Array<any> {
    return _.values(object);
  }
}
