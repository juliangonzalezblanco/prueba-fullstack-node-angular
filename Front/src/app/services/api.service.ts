import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
  export class ApiService {
    url: string = "http://localhost:3000";
  
    constructor(private http: HttpClient) {}
  
    getLlaves(){
      return this.http.get(this.url + '/llaves');
    }

    getEscenario(body:any){
      return this.http.post(this.url + '/escenario', body);
    }
  }