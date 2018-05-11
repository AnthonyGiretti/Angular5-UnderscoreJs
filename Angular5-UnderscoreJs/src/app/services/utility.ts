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

  /**
   * Returns a random integer between min and max, inclusive. 
   * If you only pass one argument, it will return a number between 0 and that number.
   * @param min 
   * @param max 
   */
  public random(min: Number, max: Number): Number {
    return _.random(min, max);
  }

  

}