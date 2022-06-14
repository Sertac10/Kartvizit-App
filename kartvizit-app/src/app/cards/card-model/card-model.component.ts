import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from 'src/app/model/card';

import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-model',
  templateUrl: './card-model.component.html',
  styleUrls: ['./card-model.component.scss']
})
export class CardModelComponent implements OnInit {

  cardForm!: FormGroup;
  showSpinner:boolean=false;
  constructor(private _snackBar: MatSnackBar, private dialogRef: MatDialogRef<CardModelComponent>,
    private fm: FormBuilder, public cardService: CardService, @Inject(MAT_DIALOG_DATA) public data: Card) { }

  ngOnInit(): void {
    
    console.log(this.data);
    this.cardForm = this.fm.group({
      id:this.data?.id|| 0,
      name: this.data?.name || '',
      title: [this.data?.title || '', Validators.required],
      phone: [this.data?.phone || '', Validators.required],
      email: [this.data?.email || '', Validators.email],
      address: this.data?.address || ''
    });
  }

  addCard(): void {
    this.showSpinner=true;
    this.cardService.addCard(this.cardForm.value).subscribe((res: any) => {
      console.log(res);
      this.cardService.getCards();
      this._snackBar.open('Eklendi', '', { duration: 2000 });


      
      this.showSpinner=false;
      this.dialogRef.close();

    });
  }
  updateCard(): void {

    this.showSpinner=true;
    this.cardService.updateCard(this.cardForm.value, this.data.id).subscribe((res: any) => {
      console.log(res);
      this._snackBar.open('Güncellendi.', '', { duration: 2000 });
      this.showSpinner=false;
      this.cardService.getCards();
      this.dialogRef.close();

    })
  };
  deleteCard():void {
    this.showSpinner=true;
    this.cardService.deleteCard(this.data.id).subscribe((res: any) => {

      
        
        this._snackBar.open('Silindi.', '', {
          duration: 2000
        });
        this.cardService.getCards();
        this.showSpinner=false;
        this.dialogRef.close();
      });

    }
    
  }

