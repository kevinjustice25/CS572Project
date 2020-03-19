import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  private postUrl = 'http://localhost:4000/users/posts/';

  constructor(private httpclient: HttpClient) {}


addPost(body ,userEmail): Observable<any> {
  return this.httpclient
    .post(this.postUrl+userEmail, body);
  }
}
