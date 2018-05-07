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

  /**
   * Creates and returns a new, throttled version of the passed function,
   * that, when invoked repeatedly, will only actually call the original function at most once per every wait milliseconds.
   * Useful for rate-limiting events that occur faster than you can keep up with.
     By default, throttle will execute the function as soon as you call it for the first time,
     and, if you call it again any number of times during the wait period, as soon as that period is over.
     If you'd like to disable the leading-edge call, pass {leading: false},
     and if you'd like to disable the execution on the trailing-edge, pass
    {trailing: false}.
   * @param delegate
   * @param wait
   * @param options
   */
  public throttle(delegate: Function, wait: number, options: any): Function {
    return (null == options) ? _.throttle(delegate, wait) : _.throttle(delegate, wait, options);
  }

  /**
   * Creates and returns a new debounced version of the passed function
   * which will postpone its execution until after wait milliseconds have elapsed since the last time it was invoked.
   * Useful for implementing behavior that should only happen after the input has stopped arriving.
   * For example: rendering a preview of a Markdown comment, recalculating a layout after the window has stopped being resized,
   * and so on.
    At the end of the wait interval,
    the function will be called with the arguments that were passed most recently to the debounced function.
    Pass true for the immediate argument to cause debounce to trigger
    the function on the leading instead of the trailing edge of the wait interval.
    Useful in circumstances like preventing accidental double-clicks on a "submit" button from firing a second time.
   */
  public debounce(delegate: Function, wait: number, immediate?: boolean): Function {
    return (null == immediate) ? _.debounce(delegate, wait) : _.debounce(delegate, wait, immediate);
  }

  /**
   * Creates a version of the function that can only be called one time. 
   * Repeated calls to the modified function will have no effect, returning the value from the original call. 
   * Useful for initialization functions, instead of having to set a boolean flag and then check it later.
   */
  public once(delegate: Function): Function {
    return _.once(delegate);
  }

  /**
   * Creates a version of the function that will only be run after being called count times. 
   * Useful for grouping asynchronous responses, where you want to be sure that all the async calls have finished, before proceeding.
   */
  public after(count: number, delegate: Function) : Function {
    return _.after(count, delegate);
  }

  /**
   * Creates a version of the function that can be called no more than count times. 
   * The result of the last function call is memoized and returned when count has been reached.
   * @param count 
   * @param delegate 
   */
  public before(count: number, delegate: Function) : Function {
    return _.before(count, delegate);
  }

}
