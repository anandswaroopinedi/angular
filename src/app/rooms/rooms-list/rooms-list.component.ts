import { Component, Input, Output,EventEmitter,ChangeDetectionStrategy, SimpleChanges, Self, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList } from '../rooms';
import { RoomsService } from '../../rooms.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  providers:[RoomsService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent {
  @Input() roomList:RoomList[]=[];
  @Input() anandChild:string="";
  @Input() name:string="";
  @Output() selectedRoom=new EventEmitter<RoomList>();
  constructor(@Self() roomService:RoomsService)
  {
    console.log(roomService.rooms);
  }
  ngOnChanges(changes:SimpleChanges)
  {
    console.log(changes);
    if(changes['name'])
    {
      console.log(this.name);
    }
    else if(changes['roomList'])
    {
      console.log(this.roomList);
    }
  }
  selectRoom(room:RoomList)
  {
    this.selectedRoom.emit(room);
  }
  onChanges()
  {

  }
}

