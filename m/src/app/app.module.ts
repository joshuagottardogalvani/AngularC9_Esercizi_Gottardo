import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DettagliAlbumComponent } from './dettagli-album/dettagli-album.component';
import { ListaBraniComponent } from './lista-brani/lista-brani.component';

@NgModule({
  declarations: [
    AppComponent,
    DettagliAlbumComponent,
    ListaBraniComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
