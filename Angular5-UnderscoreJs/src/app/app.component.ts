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

    console.log("max sample: ");
    console.log(this._helper.Collections.max([2, 4, 5], (num) => { return num; }));
    console.log("max sample: ");
    console.log(this._helper.Collections.max([{name: "Apple", category: "fruit", price: 10}, {name: "Banana", category: "fruit", price: 15}, {name: "carrot", category: "vegetable", price: 12}], function(item) { return item.price; }));

    console.log("min sample: ");
    console.log(this._helper.Collections.min([2, 4, 5], (num) => { return num; }));
    console.log("min sample: ");
    console.log(this._helper.Collections.min([{name: "Apple", category: "fruit", price: 10}, {name: "Banana", category: "fruit", price: 15}, {name: "carrot", category: "vegetable", price: 12}], function(item) { return item.price; }));

    console.log("sortBy sample: ");
    console.log(this._helper.Collections.sortBy([4, 2, 5], (num) => { return num; }));
    console.log("sortBy sample: ");
    console.log(this._helper.Collections.sortBy([{name: "Apple", category: "fruit", price: 10}, {name: "Banana", category: "fruit", price: 15}, {name: "carrot", category: "vegetable", price: 12}], function(item) { return item.price; }));

    console.log("sortByDesc sample: ");
    console.log(this._helper.Collections.sortByDesc([4, 2, 5], (num) => { return num; }));
    console.log("sortByDesc sample: ");
    console.log(this._helper.Collections.sortByDesc([{name: "Apple", category: "fruit", price: 10}, {name: "Banana", category: "fruit", price: 15}, {name: "carrot", category: "vegetable", price: 12}], function(item) { return item.price; }));

    console.log("groupBy sample: ");
    console.log(this._helper.Collections.groupBy([4.5, 2.6, 4.3], (num) => { return Math.ceil(num); }));
    console.log("groupBy sample: ");
    console.log(this._helper.Collections.groupBy([{name: "Apple", category: "fruit", price: 10}, {name: "Banana", category: 'fruit', price: 15}, {name: "carrot", category: "vegetable", price: 12}], function(item) { return item.category; }));

    console.log("indexBy sample: ");
    console.log(this._helper.Collections.indexBy([{name: "Apple", category: "fruit", price: 10}, {name: "Banana", category: "fruit", price: 15}, {name: "carrot", category: "vegetable", price: 12}], function(item) { return item.price; }));
    console.log("indexBy sample: ");
    console.log(this._helper.Collections.indexBy([{name: "Apple", category: "fruit", price: 10}, {name: "Banana", category: "fruit", price: 15}, {name: "carrot", category: "vegetable", price: 12}], 'price'));

    console.log("countBy sample: ");
    console.log(this._helper.Collections.countBy([{name: "Apple", category: "fruit", price: 10}, {name: "Banana", category: "fruit", price: 15}, {name: "carrot", category: "vegetable", price: 12}], function(item) { return item.category; }));
    console.log("countBy sample: ");
    console.log(this._helper.Collections.countBy([1, 2, 3, 4, 5], (num) => num % 2 == 0 ? 'even': 'odd'));
    console.log("countBy sample: ");
    console.log(this._helper.Collections.countBy([[1,2,3], [1,2,3,4,5], [1,2,3], [1,2,3,4]], 'length'));
    
    console.log("shuffle sample: ");
    console.log(this._helper.Collections.shuffle([1, 2, 3, 4, 5]));

    console.log("random sample: ");
    console.log(this._helper.Collections.sample([1, 2, 3, 4, 5, 6, 7]));
    console.log("random sample: ");
    console.log(this._helper.Collections.sample([1, 2, 3, 4, 5, 6, 7], 3));

    console.log("toArray sample: ");
    console.log(this._helper.Collections.toArray({name: "Apple", category: "fruit", price: 10}));

    console.log("size sample: ");
    console.log(this._helper.Collections.size([1, 2, 3, 4, 5, 6, 7]));
    console.log("size sample: ");
    console.log(this._helper.Collections.size({name: "Apple", category: "fruit", price: 10}));

    console.log("partition sample: ");
    var isPrimeNumber = (num) => {
      if (num <= 1) return false;
      if (num % 2 == 0 && num > 2) return false;
      let s = Math.sqrt(num);
      for(let i = 3; i <s; i++)
          if(num % i === 0) return false;
      return num !== 1; 
    }
    console.log(this._helper.Collections.partition([1, 2, 3, 4, 5, 6, 7], isPrimeNumber));

    // Arrays 
    console.log("first sample: " + this._helper.Arrays.first( ["Apple", "Banana", "Grapefruit"]));
    console.log("first sample: " + this._helper.Arrays.first( ["Apple", "Banana", "Grapefruit"], 2));

    console.log("initial sample: ");
    console.log(this._helper.Arrays.initial([1, 2, 3, 4, 5, 6, 7]));
    console.log("initial sample: ");
    console.log(this._helper.Arrays.initial([1, 2, 3, 4, 5, 6, 7], 6));

    console.log("last sample: ");
    console.log(this._helper.Arrays.last([1, 2, 3, 4, 5, 6, 7]));
    console.log("last sample: ");
    console.log(this._helper.Arrays.last([1, 2, 3, 4, 5, 6, 7], 4));

    console.log("rest sample: ");
    console.log(this._helper.Arrays.rest([1, 2, 3, 4, 5, 6, 7]));
    console.log("rest sample: ");
    console.log(this._helper.Arrays.rest([1, 2, 3, 4, 5, 6, 7], 4));

    console.log("compact sample: ");
    console.log(this._helper.Arrays.compact([1, NaN, 3, 0, 5, false, 7, undefined, "hello", "", null]));

    console.log("flatten sample: ");
    console.log(this._helper.Arrays.flatten([1, [2], [3, [[4]]]]));
    console.log("flatten sample: ");
    console.log(this._helper.Arrays.flatten([1, [2], [3, [[4]]]], true));

    console.log("without sample: ");
    console.log(this._helper.Arrays.without([1, 2, 1, 0, 3, 1, 4], 0, 1));

    console.log("union sample: ");
    console.log(this._helper.Arrays.union([1, 2, 3], [101, 2, 1, 10], [2, 1]));

    console.log("intersection sample: ");
    console.log(this._helper.Arrays.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]));

    console.log("difference sample: ");
    console.log(this._helper.Arrays.difference([1, 2, 3], [101, 2, 1, 10]));

    console.log("uniq sample: ");
    console.log(this._helper.Arrays.uniq([1, 2, 1, 4, 1, 3]));
    console.log("uniq sample: ");
    console.log(this._helper.Arrays.uniq([1, 2, 1, 4, 1, 3], false));
    console.log("uniq sample: ");
    console.log(this._helper.Arrays.uniq([1, 1, 2, 3, 4, 4], true));

    console.log("zip sample: ");
    console.log(this._helper.Arrays.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]));

    console.log("unzip sample: ");
    console.log(this._helper.Arrays.unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]));

    console.log("object sample: ");
    console.log(this._helper.Arrays.object(['moe', 'larry', 'curly'], [30, 40, 50]));
    console.log("object sample: ");
    console.log(this._helper.Arrays.objectFromArrays([['moe', 30], ['larry', 40], ['curly', 50]]));

    console.log("indexOf sample: ");
    console.log(this._helper.Arrays.indexOf([1, 2, 3], 2, true));
    console.log("indexOf sample: ");
    console.log(this._helper.Arrays.indexOf(["Banana", "Orange", "Apple", "Mango"], "Apple"));

    console.log("lastIndexOf sample: ");
    console.log(this._helper.Arrays.lastIndexOf([1, 2, 3, 4, 5, 6, 7], 2));
    console.log("lastIndexOf sample: ");
    console.log(this._helper.Arrays.lastIndexOf(["Banana", "Orange", "Apple", "Mango"], "Apple"));

    console.log("sortedIndex sample: ");
    console.log(this._helper.Arrays.sortedIndex([10, 20, 30, 40, 50], 35));
    console.log("sortedIndex sample: ");
    console.log(this._helper.Arrays.sortedIndex([{name: 'moe', age: 40}, {name: 'curly', age: 60}], {name: 'larry', age: 50}, 'age'));

    console.log("findIndex sample: ");
    console.log(this._helper.Arrays.findIndex([1, 2, 3, 4, 5, 6, 7, 1], isPrimeNumber));
    console.log("findIndex sample: ");
    console.log(this._helper.Arrays.findIndex([{name: 'moe', age: 40}, {name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}], {name: 'moe'}));

    console.log("findLastIndex sample: ");
    console.log(this._helper.Arrays.findLastIndex([1, 2, 3, 4, 5, 6, 7, 1], isPrimeNumber));
    console.log("findLastIndex sample: ");
    console.log(this._helper.Arrays.findLastIndex([{name: 'moe', age: 40}, {name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}], {name: 'moe'}));

    console.log("range sample: ");
    console.log(this._helper.Arrays.range(10));
    console.log("range sample: ");
    console.log(this._helper.Arrays.range(11, 1));
    console.log("range sample: ");
    console.log(this._helper.Arrays.range(30, 0, 5));
    console.log("range sample: ");
    console.log(this._helper.Arrays.range(-10, 0, -1));
    console.log("range sample: ");
    console.log(this._helper.Arrays.range(0));

    // Function
    console.log("bind sample: ");
    var func = function (firstname, lastname) { console.log(`${this.prefix} ! My name is ${firstname} ${lastname}. ${this.suffix}`) };
    var myFunc = this._helper.Functions.bind(func, {prefix: " Hello world", suffix: ":)"}, "Anthony", "Giretti");
    myFunc();

    console.log("partial sample: ");
    var subtract = function(a, b) { console.log(b - a); };
    var sub5 = this._helper.Functions.partial(subtract, 5);
    sub5(20);
    console.log("partial sample: ");
    var bigoperation = function(a, b, c, d) { console.log(a * b + c * d); };
    var bigoperation5 = this._helper.Functions.partial(bigoperation, 5, 5);
    bigoperation5(10, 2);

    console.log("delay sample: ");
    this._helper.Functions.delay(console.log, 1000, "Hello", "world");

    console.log("defer sample: ");
    this._helper.Functions.defer(console.log, "Hello", "world");

    console.log("once sample");
    var once = ()=> {console.log("called once with once function");}
    var onceToExcec = this._helper.Functions.once(once);
    onceToExcec();
    onceToExcec();

    console.log("after sample");
    var arrayOfFruits = ["Apple", "Banana", "Grapefruit"]
    var renderFruits = this._helper.Functions.after(arrayOfFruits.length, () => {console.log("These are all fruits I love !");});
    this._helper.Collections.each(arrayOfFruits, function(fruit) {
      console.log(fruit);
      renderFruits();// is run once, after all notes have saved.
    });

    console.log("before sample");
    var beforeFunction = this._helper.Functions.before(3, () => {console.log("beforeFunction is fired no more than 3 (2)");});
    beforeFunction();
    beforeFunction();
    beforeFunction(); // is not fired

    console.log("wrap sample");
    var hello = function(name) { return "hello: " + name; };
    var helloWrapped = this._helper.Functions.wrap(hello, (func) => {
      console.log("before, " + func("Anthony") + ", after");
    });
    helloWrapped();

    console.log("negate sample");
    var isFalsy = this._helper.Functions.negate(Boolean);
    console.log(this._helper.Collections.find([-2, -1, 0, 1, 2], isFalsy));
  }

}
