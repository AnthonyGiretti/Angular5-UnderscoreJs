import { Component, OnInit } from '@angular/core';

import { HelpersService } from './services/helpers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private _helper: HelpersService) { }

  public ngOnInit() {

    // Collections
    this._helper.Collections.each(["Apple", "Banana", "Grapefruit"], (value, key) => {console.log("each sample: Value :" + value + " - "+ "Key :" + key)});
    this._helper.Collections.each({one: 1, two: 2, three: 3}, (value, key) => {console.log("each sample: Value :" + value + " - "+ "Key :" + key)});

    console.log("map sample: " + this._helper.Collections.map([1, 2, 3], function(num){ return num * 3; }));
    console.log("map sample: " + this._helper.Collections.map({one: 1, two: 2, three: 3}, (num) =>{ return num * 2; }));

    console.log("reduce sample: " + this._helper.Collections.reduce([1, 2, 3], function(memo, num){ return memo + num; }));
    console.log("reduce sample: " + this._helper.Collections.reduce([1, 2, 3], (memo, num) => { return memo + num; }, 1));
    console.log("reduce sample: " + this._helper.Collections.reduce({one: 1, two: 2, three: 3}, function(num) { return num * 2; }));
    console.log("reduce sample: " + this._helper.Collections.reduce({one: 1, two: 2, three: 3}, (num) => { return num * 2; }, 1));
    console.log("reduce sample: " + this._helper.Collections.reduce(["A", "B", "C"], function(a, b) { return a+b; }));
    console.log("reduce sample: " + this._helper.Collections.reduce(["A", "B", "C"], function(a, b) { return a+b; }, "D"));

    console.log("reduceRight sample: " + this._helper.Collections.reduceRight([1, 2, 3], function(memo, num){ return memo + num; }));
    console.log("reduceRight sample: " + this._helper.Collections.reduceRight([1, 2, 3], (memo, num) => { return memo + num; }, 1));
    console.log("reduceRight sample: " + this._helper.Collections.reduceRight({one: 1, two: 2, three: 3}, function(num) { return num * 2; }));
    console.log("reduceRight sample: " + this._helper.Collections.reduceRight({one: 1, two: 2, three: 3}, (num) => { return num * 2; }, 1));
    console.log("reduceRight sample: " + this._helper.Collections.reduceRight(["A", "B", "C"], function(a, b) { return a+b; }));
    console.log("reduceRight sample: " + this._helper.Collections.reduceRight(["A", "B", "C"], function(a, b) { return a+b; }, "D"));
    
    console.log("find sample: " + this._helper.Collections.find([1, 2, 3, 4], (num) => { return num % 2 == 0; }));
    console.log("find sample: " + this._helper.Collections.find({one: 1, two: 2, three: 3, four: 4}, function(num) { return num % 2 == 0; }));

    // Arrays 
    console.log("first sample: " + this._helper.Arrays.first( ["Apple", "Banana", "Grapefruit"]));
    console.log("first sample: " + this._helper.Arrays.first( ["Apple", "Banana", "Grapefruit"], 2));

  }

}