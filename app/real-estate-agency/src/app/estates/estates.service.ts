import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { UserService } from '../auth/user.service';

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

  userId?: string;
  constructor(private httpClient: HttpClient, private userService: UserService) { }

  getEstates$() : Observable<IEstate[]>{
    return this.httpClient.get<IEstate[]>('http://localhost:3030/properties');
  }

  getOneEstate$(id : string) : Observable<IEstate>{
    return this.httpClient.get<IEstate>('http://localhost:3030/properties/' + id);
  }

  createEstate$(estateData: {img: string, price: number, address: string, description: string, title: string}): Observable<IEstate> {
    this.userId = this.userService.getUserId();
    return this.httpClient.post<IEstate>('http://localhost:3030/properties/create', {...estateData, creator: this.userId})
  }

  deleteEstate$(id : string) : Observable<IEstate> {
    return this.httpClient.delete<IEstate>('http://localhost:3030/properties/delete/'+ id)
  }

  editEstate$(id : string, estateData: {img: string, price: number, address: string, description: string, title: string}): Observable<IEstate> {
    return this.httpClient.post<IEstate>('http://localhost:3030/properties/edit/'+ id, estateData)
  }
}
