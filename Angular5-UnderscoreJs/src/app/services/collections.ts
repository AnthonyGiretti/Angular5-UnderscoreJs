import { Injectable } from '@angular/core';
import { _ } from 'underscore';

@Injectable()
export class CollectionsService {

  constructor() { }

  /**
   * Iterates over a list of elements, yielding each in turn to an iteratee function. 
   * The iteratee is bound to the context object, if one is passed. 
   * Each invocation of iteratee is called with three arguments: (element, index, list). 
   * If list is a JavaScript object, iteratee's arguments will be (value, key, list). Returns the list for chaining.
   * @param array 
   * @param delegate 
   */
  public each(array: Array<any>, delegate: Function): any {
    return _.each(array, delegate);
  }

  /**
   * Produces a new array of values by mapping each value in list through a transformation function (iteratee). 
   * The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.
   * @param array 
   * @param iteratee 
   */
  public map(array, delegate): Array<any> {
    return _.map(array, delegate);
  }


}