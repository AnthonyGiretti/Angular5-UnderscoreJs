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
  public first(array:any[], n?: number): any | any[] {
    
    if (null == n)
        return _.first(array);
    
    return _.first(array, n);
  }

}