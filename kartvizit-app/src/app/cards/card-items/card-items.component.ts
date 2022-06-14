import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Card } from 'src/app/model/card';
import { CardModelComponent } from '../card-model/card-model.component';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.scss']
})
export class CardItemsComponent implements OnInit {

  @Input() cardItem1! :Card;

  constructor(private dialog:MatDialog ) {}

  ngOnInit(): void {
  }

  openUpdateCardModel(cardItem1:Card):void{

    this.dialog.open(CardModelComponent,{width:"400px",data: cardItem1});
  }

}
