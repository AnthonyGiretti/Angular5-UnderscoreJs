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

  /**
   * Like map, but for objects. Transform the value of each property in turn.
   * @param object 
   * @param delegate 
   */
  public mapObject(object: Object, delegate: Function): Object {
    return _.mapObject(object, delegate);
  }

  /**
   * Convert an object into a list of [key, value] pairs. 
   * The opposite of object.
   * @param object 
   */
  public pairs(object: Object): Array<Array<any>> {
    return _.pairs(object);
  }

  /**
   * Returns a copy of the object where the keys have become the values and the values the keys. 
   * For this to work, all of your object's values should be unique and string serializable.
   * @param object 
   */
  public invert(object: Object): Object {
    return _.invert(object);
  }

  /**
   * Creates a new object with the given prototype, optionally attaching props as own properties. 
   * Basically, Object.create, but without all of the property descriptor jazz.
   * @param prototype 
   * @param properties 
   */
  public create(prototype: any, properties: Object) {
    return _.create(prototype, properties);
  }
}
