import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from "./user";
import { Utenti } from './mock-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: FormGroup;
  utenti = Utenti;
  hide: boolean = false;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'nome': ['Nome', Validators.required], 'cognome': ['Cognome', Validators.required], 'username': ['username', Validators.required], 'password': ['12345678', Validators.required], 'email': ['example@email.com', Validators.compose([Validators.required, Validators.email])], 'telefono': ['3333333333', Validators.required]
    });
  }

    toggleVar(){
      if(!this.hide){
        this.hide = true;
        document.getElementById("btnLogin").innerHTML = "Registrazione";
      }
      else {
        this.hide = false;
        document.getElementById("btnLogin").innerHTML = "Login";
      }
    }

    onSubmit(): boolean {

      let utente : User = new User();
      utente.nome = this.myForm.controls['nome'].value;
      utente.cognome = this.myForm.controls['cognome'].value;
      utente.username = this.myForm.controls['username'].value;
      utente.password = this.myForm.controls['password'].value;
      utente.email = this.myForm.controls['email'].value;
      utente.telefono = Number(this.myForm.controls['telefono'].value);

      this.utenti.push(utente);

    return false;
  }
}
