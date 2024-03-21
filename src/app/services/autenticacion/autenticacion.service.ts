import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from '../../core/interfaces/login-interface';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs';
import { Router } from '@angular/router';




const base_url= environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }


  login(login: LoginInterface) {
    return this.httpClient.post(`${base_url}/auth`, login).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }
}
