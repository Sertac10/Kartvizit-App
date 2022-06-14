import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Card } from '../model/card';
import { CardService } from '../services/card.service';
//import { config } from 'process';
import { CardModelComponent } from './card-model/card-model.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  //cards!:Card[];
  //cardItem={title:'baslık',name:'ad',phone:'tel',email:'mail',address:'adres'};
  constructor(public dialog: MatDialog, public cardService: CardService) { }

  ngOnInit(): void {
    //this.getCard();
    this.cardService.getCards();
  }

  openAddCardModel(): void {
    this.dialog.open(CardModelComponent, { width: '400px' })
    // dialog.afterClosed().subscribe(res=>{
    //   if(res){
    //     this.getCard();
    //  }
    //})
  };



  // getCard():void{
  //   this.cardService.getCards().subscribe((res:Card[])=>{
  //     console.log(res);
  //     this.cards=res;})

  // };

}
