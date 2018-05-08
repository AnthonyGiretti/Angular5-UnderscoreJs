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

  /**
   * Returns a sorted list of the names of every method in an object — that is to say, the name of every function property of the object.
   * @param object 
   */
  public functions(object: Object): Array<String> {
    return _.functions(object);
  }

  /**
   * Similar to _.findIndex but for properties in objects. 
   * Returns the key where the predicate truth test passes or undefined. 
   * predicate is transformed through iteratee to facilitate shorthand syntaxes.
   * @param object 
   * @param delegate 
   */
  public findKey(object: Object, delegate: Function): String {
    return _.findKey(object, delegate);
  }

  /**
   * Shallowly copy all of the properties in the source objects over to the destination object, and return the destination object. 
   * Any nested objects or arrays will be copied by reference, not duplicated. 
   * It's in-order, so the last source will override properties of the same name in previous arguments.
   * @param destination 
   * @param sources 
   */
  public extend(destination: Object, ...sources: Array<Object>): Object {
    return _.extend(destination, ...sources);
  }

  /**
   * Like extend, but only copies own properties over to the destination object.
   * @param destination 
   * @param sources 
   */
  public extendOwn(destination: Object, ...sources: Array<Object>): Object {
    return _.extendOwn(destination, ...sources);
  }

}
