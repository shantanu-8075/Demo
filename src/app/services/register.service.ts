import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = 'http://localhost:8080/demoResponse'
  constructor(private http: HttpClient) { }

  register(user){
    return this.http.post(this.url, user);
  }
}
