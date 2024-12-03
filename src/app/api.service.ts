import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    debugger;
    return this.http.post('/api/login', user);

  }

  signup(user: any): Observable<any> {
    debugger;
    return this.http.post('/api/signup', user);
  }

  resetPassword(email: string): Observable<any> {
    return this.http.post('/api/reset-password', { email });
  }
}
