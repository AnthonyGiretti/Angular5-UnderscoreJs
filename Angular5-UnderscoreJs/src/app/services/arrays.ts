import { _ } from 'underscore';

export class ArraysHelpers {

  constructor() { }

  public first(array:any[], n?: number): any | any[] {
    
    if (null == n)
        return _.first(array);
    
    return _.first(array, n);
  }

}