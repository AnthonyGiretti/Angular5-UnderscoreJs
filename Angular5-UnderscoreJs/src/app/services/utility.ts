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

  /**
   * Generate a globally-unique id for client-side models or DOM elements that need one. 
   * If prefix is passed, the id will be appended to it.
   * @param prefix 
   */
  public uniqueId(prefix: String): String {
    return _.uniqueId(prefix);
  }

  /**
   * Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.
   * @param string 
   */
  public escape(string: String): String {
    return _.escape(string);
  }

  /**
   * The opposite of escape, replaces &amp;, &lt;, &gt;, &quot;, &#96; and &#x27; with their unescaped counterparts.
   * @param string 
   */
  public unescape(string: String): String {
    return _.unescape(string);
  }

  /**
   * Returns an integer timestamp for the current time, using the fastest method available in the runtime. 
   * Useful for implementing timing/animation functions.
   */
  public now(): Number {
    return _.now();  
  }

  /**
   * Compiles JavaScript templates into functions that can be evaluated for rendering. 
   * Useful for rendering complicated bits of HTML from JSON data sources. 
   * Template functions can both interpolate values, using <%= … %>, as well as execute arbitrary JavaScript code, with <% … %>. 
   * If you wish to interpolate a value, and have it be HTML-escaped, use <%- … %>. 
   * When you evaluate a template function, pass in a data object that has properties corresponding to the template's free variables. 
   * The settings argument should be a hash containing any _.templateSettings that should be overridden.
   * @param template 
   */
  public template(template: String): Function {
    return _.template(template);
  }

}