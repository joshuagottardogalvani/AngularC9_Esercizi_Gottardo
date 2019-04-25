import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';
import { ViewPrenotazioneComponent } from './view-prenotazione/view-prenotazione.component';

@NgModule({
  declarations: [
    AppComponent,
    PrenotazioniComponent,
    ViewPrenotazioneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
