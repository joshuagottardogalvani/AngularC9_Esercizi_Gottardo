import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';
import { ViewPrenotazioniComponent } from './view-prenotazioni/view-prenotazioni.component';

@NgModule({
  declarations: [
    AppComponent,
    PrenotazioniComponent,
    ViewPrenotazioniComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
