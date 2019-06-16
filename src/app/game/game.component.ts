import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {BuyDialogComponent} from '../buy/buy-dialog.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  buy() {
    const dialogRef = this.dialog.open(BuyDialogComponent, {
      width: '500px',
      // height: '100%',
      // data: {name: this.name, animal: this.animal}
    });
  }
}
