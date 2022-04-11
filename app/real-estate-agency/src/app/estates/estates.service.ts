import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface IEstate{
  "_id": number,
  "title": string,
  "img": string,
  "price": number,
  "address": string,
  "description": string,
}
@Injectable({
  providedIn: 'root'
})
export class EstatesService {

  constructor(private httpClient: HttpClient) { }

  getEstates$() : Observable<IEstate[]>{
    return this.httpClient.get<IEstate[]>('http://localhost:3030/properties');
  }
}
