import { AppComponent } from './app.component';
import { ArraysService } from './services/arrays';
import { BrowserModule } from '@angular/platform-browser';
import { CollectionsService } from './services/collections';
import { FunctionsService } from './services/functions';
import { HelpersService } from "./services/helpers.service";
import { NgModule } from '@angular/core';
import { ObjectsService } from './services/objects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HelpersService, CollectionsService, ArraysService, ObjectsService, FunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
