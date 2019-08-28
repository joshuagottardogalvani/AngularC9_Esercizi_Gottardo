import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Object } from "../object";
import { Oggetti } from '../mock-objects';

@Component({
  selector: 'app-new-object',
  templateUrl: './new-object.component.html',
  styleUrls: ['./new-object.component.css']
})
export class NewObjectComponent implements OnInit {

  @Input() username;
  objectForm: FormGroup;
  oggetti = Oggetti;

  constructor(fb: FormBuilder) {
    this.objectForm = fb.group({'nome': ['nome', Validators.required], 'tipo': ['tipo', Validators.required], 'descrizione': ['descrizione', Validators.required]});
  }

  ngOnInit() {}

    aggiungiOggetto(): boolean {

    if(this.objectForm.valid){
      if(this.username != null){
        let oggetto: Object = new Object();
        oggetto.nome = this.objectForm.controls['nome'].value;
        oggetto.tipo = this.objectForm.controls['tipo'].value;
        oggetto.descrizione = this.objectForm.controls['descrizione'].value;
        oggetto.usernameProprietario = this.username;
        oggetto.postAssociato = null;
        this.oggetti.push(oggetto);
        document.getElementById("loginPerOggetti").style.display = "none";
      } else {
        document.getElementById("loginPerOggetti").style.display = "block";
      }
    } else {
        console.log("Il form non è valido");
    }

    return false;
  }

}
