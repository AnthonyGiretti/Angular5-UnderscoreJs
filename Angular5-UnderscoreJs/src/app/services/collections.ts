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
  public each(array: Array<any> | object, delegate: Function): any {
    return _.each(array, delegate);
  }

  /**
   * Produces a new array of values by mapping each value in list through a transformation function (iteratee). 
   * The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.
   * @param array 
   * @param delegate 
   */
  public map(array: Array<any> | object, delegate: Function): Array<any> {
    return _.map(array, delegate);
  }

  /**
   * Also known as inject and foldl, reduce boils down a list of values into a single value. 
   * Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. 
   * The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.
   * If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. 
   * The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.
   * @param array 
   * @param delegate 
   * @param memo 
   */
  public reduce(array: Array<any> | object, delegate: Function, memo?: any): any {

    if (memo != null) {
      return _.reduce(array, delegate);
    }
    return _.reduce(array, delegate, memo);
  }


  /**
   * The right-associative version of reduce.
   * @param array 
   * @param delegate 
   * @param memo 
   */
  public reduceRight(array: Array<any> | object, delegate: Function, memo?: any): any {

    if (memo != null) {
      return _.reduceRight(array, delegate);
    }
    return _.reduceRight(array, delegate, memo);
  }

}