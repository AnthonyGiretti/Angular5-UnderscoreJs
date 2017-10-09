import { Component, OnInit } from '@angular/core';

import { HelperService } from './services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _fruits = ["Apple", "Banana", "Grapefruit"];

  constructor(private _helper: HelperService) { }

  public ngOnInit() {

    this._helper.each(this._fruits, console.log);

  }

}