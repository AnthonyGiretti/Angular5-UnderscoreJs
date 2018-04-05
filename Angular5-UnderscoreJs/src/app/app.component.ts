import { Component, OnInit } from '@angular/core';

import { HelpersService } from './services/helpers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _fruits = ["Apple", "Banana", "Grapefruit"];

  constructor(private _helper: HelpersService) { }

  public ngOnInit() {

    this._helper.Collections.each(this._fruits, console.log);

    console.log(this._helper.Arrays.first(this._fruits));
    console.log(this._helper.Arrays.first(this._fruits, 2));

  }

}