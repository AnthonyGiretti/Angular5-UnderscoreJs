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

  /**
   * Return a copy of the object, filtered to only have values for the whitelisted keys (or array of valid keys). 
   * Alternatively accepts a predicate indicating which keys to pick.
   * @param originalObject 
   * @param delegate 
   * @param keys 
   */
  public pick(originalObject: Object, delegate?: Function, ...keys: Array<String>): Object {
    if (delegate == null) {
      return _.pick(originalObject, ...keys);
    }
    else {
      return _.pick(originalObject, delegate);
    }
  }

  /**
   * Return a copy of the object, filtered to omit the blacklisted keys (or array of keys). 
   * Alternatively accepts a predicate indicating which keys to omit.
   */
  public omit(originalObject: Object, delegate?: Function, ...keys: Array<String>): Object {
    if (delegate == null) {
      return _.omit(originalObject, ...keys);
    }
    else {
      return _.omit(originalObject, delegate);
    }
  }

  /**
   * Returns object after filling in its undefined properties with the first value present in the following list of defaults objects.
   */
  public defaults(originalObject: Object, ...defaults: Array<Object>): Object {
    return _.defaults(originalObject, ...defaults);
  }

  /**
   * Create a shallow-copied clone of the provided plain object. 
   * Any nested objects or arrays will be copied by reference, not duplicated.
   * @param originalObject 
   */
  public clone(originalObject: Object): Object {
    return _.clone(originalObject);
  }

  /** 
   * Does the object contain the given key? Identical to object.hasOwnProperty(key), 
   * but uses a safe reference to the hasOwnProperty function, in case it's been overridden accidentally. 
   */
  public has(object: Object, key: String): Boolean {
    return _.has(object,key);
  }

  /**
   * Returns a function that will return the specified property of any passed-in object. 
   * path may be specified as a simple key, or as an array of object keys or array indexes, for deep property fetching.
   * @param keys 
   */
  public property(path: String | Array<String>): Function {
    return _.property(path);
  }

  /**
   * Inverse of _.property. 
   * Takes an object and returns a function which will return the value of a provided property.
   * @param object 
   */
  public propertyOf(object: Object): Function {
    return _.propertyOf(object);
  }

}
