import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
// constante clogan dde mi clase
const base_url= environment.base_url;
@Injectable({
  providedIn: 'root',
})
// en la misma clase duera del construnctor
export class ClientesService {
  getclientes() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) { }

  getClientes(){
    return this.httpClient.get(`${base_url}/cliente`);
  }

}
