import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cartella',
  templateUrl: './cartella.component.html',
  styleUrls: ['./cartella.component.css']
})
export class CartellaComponent implements OnInit {
  
  @Input() numeroEstratto: number;

  constructor() {
  }

  ngOnInit() {
  }
}
