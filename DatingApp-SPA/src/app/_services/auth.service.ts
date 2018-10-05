import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://localhost:44332/api/auth/';

constructor(private http: HttpClient) { }

login(model: any) {
  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((Response: any) => {
      const user = Response;
      if (user) {
        localStorage.setItem('token', user.token);
      }
    })
  );
}

Register(model: any) {
 return this.http.post(this.baseUrl + 'register', model);
}

}
