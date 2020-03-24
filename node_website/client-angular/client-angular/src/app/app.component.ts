import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  results: string[];
  private BASE_URL:string = '/api';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://3000-b8d879cc-a235-4d50-b5de-651234139b93.ws-eu0.gitpod.io/api/products').subscribe(data => {
      this.results = data['results'];
    });
  }
}
