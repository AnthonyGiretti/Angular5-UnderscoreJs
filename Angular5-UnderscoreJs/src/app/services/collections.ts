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
  public each(array, delegate): any {
    return _.each(array, delegate);
  }

}