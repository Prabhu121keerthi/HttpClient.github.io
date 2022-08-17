import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  url = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

  constructor(private http:HttpClient) { }

  getPost() {
    return this.http.get(this.url);
  }

}
