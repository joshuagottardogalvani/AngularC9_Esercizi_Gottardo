import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myForm: FormGroup;
  risultato: Number;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'numero1': ['1', Validators.required], 'numero2': ['2', Validators.required]
    });
  }

  somma() {
   this.risultato = Number(this.myForm.controls['numero1'].value) + Number(this.myForm.controls['numero2'].value);
   return false;
  }

  sottrazione() {
   this.risultato = Number(this.myForm.controls['numero1'].value) - Number(this.myForm.controls['numero2'].value);
   return false;
  }

  moltiplicazione() {
   this.risultato = Number(this.myForm.controls['numero1'].value) * Number(this.myForm.controls['numero2'].value);
   return false;
  }
  
  divisione() {
   this.risultato = Number(this.myForm.controls['numero1'].value) / Number(this.myForm.controls['numero2'].value);
   return false;
  }

}