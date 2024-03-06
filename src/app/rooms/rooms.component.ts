import { Component,Inject,OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from '../rooms.service';
import { LocalStorageItem } from '../../localstorage.token';
import { Observable } from 'rxjs';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes=[{
  path: 'rooms-list',component:RoomsListComponent
},
{
  path: 'header',component:HeaderComponent
}]
@Component({
    selector: 'app-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.css',
    imports: [CommonModule, RoomsListComponent,HeaderComponent,RouterModule]
})
export class RoomsComponent implements OnInit {
  hotelName="Hilton Hotel";
  noOfRooms=20;
  text="Anand";
  hidden=false;
  role="Anand";
  rooms:RoomList[]=[];
  anandParent: string = "Parent";
  title:string="";
  @ViewChild(HeaderComponent)hc!:HeaderComponent;

  constructor(private serviceRooms:RoomsService,@Inject(LocalStorageItem) private localStorage:any)
  {
    this.rooms=serviceRooms.rooms
    this.localStorage.setItem('anand',25);
  }
  stream =new Observable((observer)=>{
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  })
  ngAfterViewInit()
  {
    console.log(this.hc);
  }
  ngOnDestroy()
  {
    console.log("destroyed");
  }
  ngOnInit(): void {
    console.log(this.hc);
    this.stream.subscribe({
      next:(value)=> console.log(value),
      complete:()=>console.log('comleted')
    })
  }
  room:Room=
  {
    totalRooms:10,
    availableRooms:1,
    bookedRooms:5
  }
  toggle()
  {
    this.hidden=!this.hidden
    this.text=this.text+"Swaroop";
  }
  selectRoom(room:RoomList):void
  {
    console.log(room);
  }
  addRoom()
  {
    this.rooms=[...this.rooms,{
      roomNumber:4,
      eminities:"Ac,fridge,tv,wm",
      photo:"xxxxx",
      roomType:"deluxe",
      price:800,
      checkInTime:new Date(),
      rating:3.567
    }]
  }
}
