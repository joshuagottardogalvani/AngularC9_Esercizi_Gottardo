import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  numeroEstratto: number;
  numeri: number[];

  constructor() {
    this.numeri = [];
  }

  ngOnInit() {
  }

  estrai(numero1: HTMLInputElement): void {
    let numero2 = Number(numero1.value);
    
    if (numero2 !== this.numeroEstratto && !isNaN(numero2)) {
      this.numeroEstratto = numero2;
      this.numeri.push(numero2); 
    }
  }
}