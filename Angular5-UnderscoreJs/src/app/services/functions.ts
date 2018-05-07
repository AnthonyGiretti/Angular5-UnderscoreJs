import { Injectable } from '@angular/core';
import { _ } from 'underscore';

@Injectable()
export class FunctionsService {

  constructor() { }

  /**
   * Bind a function to an object, meaning that whenever the function is called, the value of this will be the object.
   * Optionally, pass arguments to the function to pre-fill them, also known as partial application.
   * For partial application without context binding, use partial.
   * @param delegate
   * @param data
   * @param parameters
   */
  public bind<T>(delegate: Function, data: T, ...parameters: Array<any>): Function {
    return _.bind(delegate, data, ...parameters);
  }

  /**
   * Partially apply a function by filling in any number of its arguments, without changing its dynamic this value.
   * A close cousin of bind.
   * @param delegate
   * @param parameters
   */
  public partial(delegate: Function, ...parameters: Array<any>): Function {
    return _.partial(delegate, ...parameters);
  }

  /**
   * Much like setTimeout, invokes function after wait milliseconds.
   * If you pass the optional arguments, they will be forwarded on to the function when it is invoked.
   * @param delegate
   * @param wait
   * @param parameters
   */
  public delay(delegate: Function, wait: number, ...parameters: Array<any>): void {
    _.delay(delegate, wait, ...parameters);
  }

  /**
   * Defers invoking the function until the current call stack has cleared, similar to using setTimeout with a delay of 0.
   * Useful for performing expensive computations or HTML rendering in chunks without blocking the UI thread from updating.
   * If you pass the optional arguments, they will be forwarded on to the function when it is invoked.
   * @param delegate
   * @param parameters
   */
  public defer(delegate: Function, ...parameters: Array<any>): void {
    _.defer(delegate, ...parameters);
  }
}
