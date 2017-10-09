import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HelperService } from "./services/helper.service";
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
