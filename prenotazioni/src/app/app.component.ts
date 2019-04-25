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
    this.myForm = fb.group({
      'nome': ['Nome', Validators.required], 'cognome': ['Cognome', Validators.required], 'indirizzo': ['Indirizzo', Validators.required], 'email': ['Email', Validators.required], 'telefono': ['Telefono', Validators.required], 'data': ['Data', Validators.required], 'ora': ['Ora', Validators.required]
    });
  }

   onSubmit(value: string): void {
    console.log('you submitted value: ', value);
   }
}
