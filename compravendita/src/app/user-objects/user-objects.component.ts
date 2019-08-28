import { Component, OnInit, Input } from '@angular/core';
import { Object } from "../object";
import { Oggetti } from '../mock-objects';

@Component({
  selector: 'app-user-objects',
  templateUrl: './user-objects.component.html',
  styleUrls: ['./user-objects.component.css']
})
export class UserObjectsComponent implements OnInit {

  @Input() username;
  oggetti = Oggetti;
  myVar: boolean = true;
  oggettoSelezionato: Object;

  constructor() { }

  onSelect(oggetto: Object): void {
    this.oggettoSelezionato = oggetto;
  }

  ngOnInit() {
  }

}
