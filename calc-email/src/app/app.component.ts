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
  numero1: Number;
  numero2: Number;
  arrayNumeri: Number[];

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'numero1': ['0', Validators.required], 'numero2': ['0', Validators.required]
    });
  }

  somma() {
    this.numero1 = Number(this.myForm.controls['numero1'].value);
    this.numero2 = Number(this.myForm.controls['numero2'].value);
    this.risultato = Number(this.myForm.controls['numero1'].value) + Number(this.myForm.controls['numero2'].value);

    this.vettoreNumeri(Number(this.numero1), Number(this.numero2));

    return false;
  }

  sottrazione() {
    this.numero1 = Number(this.myForm.controls['numero1'].value);
    this.numero2 = Number(this.myForm.controls['numero2'].value);
    this.risultato = Number(this.myForm.controls['numero1'].value) - Number(this.myForm.controls['numero2'].value);

    this.vettoreNumeri(Number(this.numero1), Number(this.numero2));

    return false;
  }

  moltiplicazione() {
    this.numero1 = Number(this.myForm.controls['numero1'].value);
    this.numero2 = Number(this.myForm.controls['numero2'].value);
    this.risultato = Number(this.myForm.controls['numero1'].value) * Number(this.myForm.controls['numero2'].value);

    this.vettoreNumeri(Number(this.numero1), Number(this.numero2));

    return false;
  }

  divisione() {
    this.numero1 = Number(this.myForm.controls['numero1'].value);
    this.numero2 = Number(this.myForm.controls['numero2'].value);
    this.risultato = Number(this.myForm.controls['numero1'].value) / Number(this.myForm.controls['numero2'].value);

    this.vettoreNumeri(Number(this.numero1), Number(this.numero2));

    return false;
  }

      vettoreNumeri(n1: number, n2:number)
    {
        //Se n2< n1 li scambio
        if (n1<n2) {
            let a = n2;
            n2 = n1;
            n2= a;
        }
        this.arrayNumeri = new Array<number>();
        for(let i = n1; i <=n2; i++)
        {
            console.log(i);
            this.arrayNumeri.push(i);
        }
    }

}
