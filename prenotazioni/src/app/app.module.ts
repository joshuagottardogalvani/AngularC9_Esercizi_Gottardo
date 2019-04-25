import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
