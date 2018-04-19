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

}