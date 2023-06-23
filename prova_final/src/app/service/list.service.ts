import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
private url: string = 'https://allramos.github.io/desenvolvimento-web/lista-reservas.json'

  constructor(private http: HttpClient) {

   }
   getReservas(): Observable<any> {
    return this.http.get(this.url)
   }
}
