import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms'
@Component({
  selector: 'app-rooms-add',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.css'
})
export class RoomsAddComponent {
  room:RoomList={
    roomNumber:0,
    eminities:'ac,fridge',
    roomType:'deluxe',
    price:0,
    checkInTime:new Date(),
    photo:'',
    rating:0
  }
  constructor()
  {

  }
  addForm(ngForm:NgForm)
  {
    ngForm.reset();
    ngForm.resetForm(
      {
        roomNumber:0,
        eminities:'',
        roomType:'',
        price:0,
        checkInTime:new Date(),
        photo:'',
        rating:0
      }
    )
  }
}
