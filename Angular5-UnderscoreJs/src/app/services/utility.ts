import { Injectable } from '@angular/core';
import { _ } from 'underscore';

@Injectable()
export class UtilityService {

  constructor() { }

  /**
   * Invokes the given iteratee function n times. 
   * Each invocation of iteratee is called with an index argument. Produces an array of the returned values. 
   * Note: this example uses the object-oriented syntax.
   * @param times 
   * @param delegate 
   */
  public times(times: Number, delegate: Function): void {
      _.times(times, delegate);
  }
}