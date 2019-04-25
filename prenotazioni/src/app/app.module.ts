import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
