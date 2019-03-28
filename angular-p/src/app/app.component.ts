import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  numeroEstratto: number;

  constructor() { }

  ngOnInit() {
  }

  estrai(numero1: HTMLInputElement): void {
    let numero2 = Number(numero1);
    this.numeroEstratto = numero2;
    console.log(numero2);
  }
}
