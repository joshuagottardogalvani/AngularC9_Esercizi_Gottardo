import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nome: String = "";
  cognome: String = "";
  arrayNomi: String[];

  constructor() {
    this.arrayNomi = [];
  }

  ngOnInit() {
  }

  Inserisci(nome: HTMLInputElement, cognome: HTMLInputElement): void {

    if (this.nome != nome.value && this.cognome != cognome.value) {
      this.nome = nome.value;
      this.cognome = cognome.value;
      this.arrayNomi.push(nome + " " + cognome);
    }
  }
}