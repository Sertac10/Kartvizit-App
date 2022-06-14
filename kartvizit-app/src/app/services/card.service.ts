import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Card } from '../model/card';





@Injectable({
  providedIn: 'root'
})
export class CardService {

cards!:Card[];
  constructor(@Inject('apiUrl') private apiUrl: string, private http: HttpClient) { }

  getCards(): void {
  //this.http.get<Card[]>(this.apiUrl + '/cards').subscribe((res:Card[])=>{this.cards=res;});
  this.http.get<Card[]>(this.apiUrl + '/Kartvizits').subscribe((res:Card[])=>{this.cards=res;});
  }

  addCard(card:Card): Observable<any>{

    return this.http.post(this.apiUrl+'/Kartvizits',card);
  }

  updateCard(card:Card, cardId:number): Observable<any>{

    return this.http.put(this.apiUrl+'/Kartvizits/'+cardId,card);
    //return this.http.put(this.apiUrl+'/Kartvizits/'+cardId,card);

  }
  // updateCard(card:Card, cardId:number): Observable<any>{

  //   return this.http.put(this.apiUrl+'/Kartvizits/'+cardId,card);
  //   //return this.http.put(this.apiUrl+'/Kartvizits/'+cardId,card);

  // }

  deleteCard(cardId:number):Observable<any>{

    return this.http.delete(this.apiUrl+"/Kartvizits/"+cardId);
  }
}