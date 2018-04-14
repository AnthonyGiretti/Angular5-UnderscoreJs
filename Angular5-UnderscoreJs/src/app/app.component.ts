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

    console.log("filter sample: " + this._helper.Collections.filter([1, 2, 3, 4], (num) => { return num % 2 == 0; }));
    console.log("filter sample: " + this._helper.Collections.filter({one: 1, two: 2, three: 3, four: 4}, function(num) { return num % 2 == 0; }));

    console.log("where sample: ");
    console.log(this._helper.Collections.where([{name: "Apple", category: "fruit"}, {name: "Banana", category: "fruit"}, {name: "carrot", category: "vegetable"}], {category: "fruit"}));

    console.log("findWhere sample: ");
    console.log(this._helper.Collections.findWhere([{name: "Apple", category: "fruit"}, {name: "Banana", category: "fruit"}, {name: "carrot", category: "vegetable"}], {category: "fruit"}));

    console.log("reject sample: " + this._helper.Collections.reject([1, 2, 3, 4], (num) => { return num % 2 == 0; }));
    console.log("reject sample: " + this._helper.Collections.reject({one: 1, two: 2, three: 3, four: 4}, function(num) { return num % 2 == 0; }));

    console.log("every sample: " + this._helper.Collections.every([2, 4, 5], (num) => { return num % 2 == 0; }));
    console.log("every sample: " + this._helper.Collections.every({two: 2, four: 4, six: 6}, function(num) { return num % 2 == 0; }));

    console.log("some sample: " + this._helper.Collections.some([2, 4, 5], (num) => { return num % 2 == 0; }));
    console.log("some sample: " + this._helper.Collections.some({two: 2, four: 4, six: 6}, function(num) { return num % 2 == 0; }));

    console.log("contains sample: " + this._helper.Collections.contains([2, 4, 5], 2));
    console.log("contains sample: " + this._helper.Collections.contains([2, 4, 5], 2, 1));
    console.log("contains sample: " + this._helper.Collections.contains([2, 4, 5], 4, 1));
    console.log("contains sample: " + this._helper.Collections.contains({one: 1, two: 2, three: 3, four: 4}, 3));
    console.log("contains sample: " + this._helper.Collections.contains({one: 1, two: 2, three: 3, four: 4}, 5));

    console.log("invoke sample: ");
    console.log(this._helper.Collections.invoke([["Grapefruit", "Apple", "Banana"]], 'sort'));
    console.log("invoke sample: ");
    console.log(this._helper.Collections.invoke([[2, 4, 5]], 'sort'));

    console.log("pluck sample: ");
    console.log(this._helper.Collections.pluck([{name: "Apple", category: "fruit"}, {name: "Banana", category: "fruit"}, {name: "carrot", category: "vegetable"}], 'name'));

    // Arrays 
    console.log("first sample: " + this._helper.Arrays.first( ["Apple", "Banana", "Grapefruit"]));
    console.log("first sample: " + this._helper.Arrays.first( ["Apple", "Banana", "Grapefruit"], 2));

  }

}