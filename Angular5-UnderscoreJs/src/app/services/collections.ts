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
   * @param list 
   * @param delegate 
   */
  public each(list: Array<any> | object, delegate: Function): any {
    return _.each(list, delegate);
  }

  /**
   * Produces a new array of values by mapping each value in list through a transformation function (iteratee). 
   * The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.
   * @param list 
   * @param delegate 
   */
  public map(list: Array<any> | object, delegate: Function): Array<any> {
    return _.map(list, delegate);
  }

  /**
   * Also known as inject and foldl, reduce boils down a list of values into a single value. 
   * Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. 
   * The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.
   * If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. 
   * The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.
   * @param list 
   * @param delegate 
   * @param memo 
   */
  public reduce(list: Array<any> | object, delegate: Function, memo?: any): any {

    if (memo == null) {
      return _.reduce(list, delegate);
    }
    return _.reduce(list, delegate, memo);
  }


  /**
   * The right-associative version of reduce.
   * @param array 
   * @param delegate 
   * @param memo 
   */
  public reduceRight(list: Array<any> | object, delegate: Function, memo?: any): any {

    if (memo == null) {
      return _.reduceRight(list, delegate);
    }
    return _.reduceRight(list, delegate, memo);
  }

  /**
   * Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. 
   * The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
   * @param list 
   * @param delegate 
   */
  public find(list: Array<any> | object, delegate: Function): any {
    return _.find(list, delegate);
  }

  /**
   * Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
   * @param list 
   * @param delegate 
   */
  public filter(list: Array<any> | object, delegate: Function): any {
    return _.filter(list, delegate);
  }

  /**
   * Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.
   * @param list 
   * @param properties 
   */
  public where(list: Array<object>, properties: any): any[] {
    return _.where(list, properties);
  }

  /**
   * Looks through the list and returns the first value that matches all of the key-value pairs listed in properties.
   * If no match is found, or if list is empty, undefined will be returned.
   * @param list 
   * @param properties 
   */
  public findWhere(list: Array<object>, properties: any): any[] {
    return _.findWhere(list, properties);
  }

  /**
   * Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.
   * @param list 
   * @param delegate 
   */
  public reject(list: Array<any> | object, delegate: Function): any {
    return _.reject(list, delegate);
  }

  /**
   * Returns true if all of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a false element is found.
   * @param list 
   * @param delegate 
   */
  public every(list: Array<any> | object, delegate : Function): boolean {
    return _.every(list, delegate);
  }

  /**
   * Returns true if any of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a true element is found.
   * @param list 
   * @param delegate 
   */
  public some(list: Array<any> | object, delegate : Function): boolean {
    return _.some(list, delegate);
  }

  /**
   * Returns true if the value is present in the list. 
   * Uses indexOf internally, if list is an Array. 
   * Use fromIndex to start your search at a given index.
   * @param list 
   * @param value 
   * @param fromIndex 
   */
  public contains(list: Array<any> | object, value: any, fromIndex?: number): boolean {  
    if (list instanceof Array) {
      if (fromIndex == null) {
        return _.contains(list, value);
      }
      else {
        return _.contains(list, value, fromIndex);
      }
    } 
    else {
      return _.contains(list, value);
    }    
  }

  /**
   * Calls the method named by methodName on each value in the list. 
   * @param list 
   * @param methodName 
   */
  public invoke(list: Array<any> | object, methodName: string): Array<any> {
    return _.invoke(list, methodName);
  }

}