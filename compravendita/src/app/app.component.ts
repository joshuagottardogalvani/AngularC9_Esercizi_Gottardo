import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'nome': ['Nome', Validators.required], 'cognome': ['Cognome', Validators.required], 'username': ['username', Validators.required], 'password': ['12345678', Validators.required], 'email': ['example@email.com', Validators.compose([Validators.required, Validators.email])], 'telefono': ['3333333333', Validators.required]
    });
  }

}
