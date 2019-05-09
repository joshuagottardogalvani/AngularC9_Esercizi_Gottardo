import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*nella lista degli input*/
  'link': ['', Validators.required], 'valutazione': ['', Validators.required]
}
