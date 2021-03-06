import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RentComponent } from './rent/rent.component';
import { BackComponent } from './back/back.component';
import { ChoicezoneComponent } from './choicezone/choicezone.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { FreeComponent } from './free/free.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { ImotionsComponent } from './imotions/imotions.component';
import { RentautoComponent } from './rentauto/rentauto.component';
import { FaqComponent } from './faq/faq.component';
import { MorefaqComponent } from './morefaq/morefaq.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FootComponent } from './foot/foot.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentComponent,
    BackComponent,
    ChoicezoneComponent,
    ConditionsComponent,
    FreeComponent,
    AdvantagesComponent,
    ImotionsComponent,
    RentautoComponent,
    FaqComponent,
    MorefaqComponent,
    ContactsComponent,
    FootComponent
  ],
    imports: [
        BrowserModule,
        RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
