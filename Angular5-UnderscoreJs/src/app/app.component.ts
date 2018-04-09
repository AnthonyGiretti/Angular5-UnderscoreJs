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
    this._helper.Collections.each(["Apple", "Banana", "Grapefruit"], console.log);
    this._helper.Collections.each({one: 1, two: 2, three: 3}, console.log);
    this._helper.Collections.map([1, 2, 3], function(num){ return num * 3; });
    this._helper.Collections.map({one: 1, two: 2, three: 3}, (num) =>{ return num * 3; });


    // Arrays 
    console.log(this._helper.Arrays.first( ["Apple", "Banana", "Grapefruit"]));
    console.log(this._helper.Arrays.first( ["Apple", "Banana", "Grapefruit"], 2));

  }

}