import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface IEstate{
  "_id": string,
  "title": string,
  "img": string,
  "price": number,
  "address": string,
  "description": string,
  "views": number,
}
@Injectable({
  providedIn: 'root'
})
export class EstatesService {

  constructor(private httpClient: HttpClient) { }

  getEstates$() : Observable<IEstate[]>{
    return this.httpClient.get<IEstate[]>('http://localhost:3030/properties');
  }

  getOneEstate$(id : string) : Observable<IEstate>{
    return this.httpClient.get<IEstate>('http://localhost:3030/properties/' + id);
  }

  createEstate$(estateData: {img: string, price: number, address: string, description: string, title: string}): Observable<IEstate> {
    return this.httpClient.post<IEstate>('http://localhost:3030/properties/create', estateData)
  }

  deleteEstate$(id : string) : Observable<IEstate> {
    return this.httpClient.delete<IEstate>('http://localhost:3030/properties/delete/'+ id)
  }

  editEstate$(id : string, estateData: {img: string, price: number, address: string, description: string, title: string}): Observable<IEstate> {
    return this.httpClient.post<IEstate>('http://localhost:3030/properties/edit/'+ id, estateData)
  }
}
