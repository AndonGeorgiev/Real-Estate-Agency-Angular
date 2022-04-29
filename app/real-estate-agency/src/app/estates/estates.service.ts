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
  "likers": string[],
  "savedDates": any,
  'creator': string,
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

  sellEstate$(id : string, userId : string) : Observable<IEstate> {
    return this.httpClient.post<IEstate>('http://localhost:3030/properties/sell/'+ id,{userId})
  }

  editEstate$(id : string, estateData: {img: string, price: number, address: string, description: string, title: string}): Observable<IEstate> {
    return this.httpClient.post<IEstate>('http://localhost:3030/properties/edit/'+ id, estateData)
  }

  like$(id : string, userId : string) : Observable<IEstate> {
    return this.httpClient.post<IEstate>('http://localhost:3030/properties/like/'+ id,{userId})
  }

  dislike$(id : string, userId : string) : Observable<IEstate> {
    return this.httpClient.post<IEstate>('http://localhost:3030/properties/dislike/'+ id,{userId})
  }

  saveDate$(id : string, data: any) : Observable<any> {
    return this.httpClient.post<any>('http://localhost:3030/properties/date/'+ id,{data})
  }
}
