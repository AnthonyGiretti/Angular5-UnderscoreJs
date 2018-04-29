import { Injectable } from '@angular/core';
import { _ } from 'underscore';

@Injectable()
export class ArraysService {

  constructor() { }

  /**
   * Returns the first element of an array. Passing n will return the first n elements of the array.
   * @param array 
   * @param n 
   */
  public first(array:Array<any>, n?: number): any | Array<any> {
    
    if (null == n)
        return _.first(array);
    
    return _.first(array, n);
  }

  /**
   * Returns everything but the last entry of the array. Especially useful on the arguments object. 
   * Pass n to exclude the last n elements from the result.
   * @param array 
   * @param n 
   */
  public initial(array:Array<any>, n?: number): Array<any> {
    
    if (null == n)
        return _.initial(array);
    
    return _.initial(array, n);
  }

  /**
   * Returns the last element of an array. 
   * Passing n will return the last n elements of the array.
   * @param array 
   * @param n 
   */
  public last(array:Array<any>, n?: number): any | Array<any> {
    
    if (null == n)
        return _.last(array);
    
    return _.last(array, n);
  }

  /**
    Returns the rest of the elements in an array. 
    Pass an index to return the values of the array from that index onward.
   * @param array 
   * @param n 
   */
  public rest<T>(array:Array<T>, index?: number): Array<T> { 
    if (null == index)
        return _.rest(array);
    
    return _.rest(array, index);
  }

  /**
   * Returns a copy of the array with all falsy values removed. 
   * In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
   * @param array 
   */
  public compact<T>(array:Array<T>): Array<T> {
    return _.compact(array);
  }

  /**
   * Flattens a nested array (the nesting can be to any depth). 
   * If you pass shallow, the array will only be flattened a single level.
   * @param array 
   * @param shallow 
   */
  public flatten<T>(array:Array<T>, shallow?: boolean): Array<T> {
    if (shallow == null)
      return _.flatten(array);

      return _.flatten(array,true);
  }

  /**
   * Returns a copy of the array with all instances of the values removed.
   * @param array 
   */
  public without<T>(array:Array<T>, valuesToRemove: Array<T>): Array<T> {
    return _.without(array, ...valuesToRemove);
  }

}