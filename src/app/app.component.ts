import { Component } from '@angular/core';
import { HttpServiceService } from './http-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HttpClient';

  posts:any;
  constructor(private httpService:HttpServiceService) {}

 ngOnInit() {
  this.httpService.getPost().subscribe(response => {
    this.posts = response;
  },   
  error => {
    console.log(error);
  })
 }
}

