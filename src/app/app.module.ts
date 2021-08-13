import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RentComponent } from './rent/rent.component';
import { BackComponent } from './back/back.component';
import { ChoicezoneComponent } from './choicezone/choicezone.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { FreeComponent } from './free/free.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentComponent,
    BackComponent,
    ChoicezoneComponent,
    ConditionsComponent,
    FreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
