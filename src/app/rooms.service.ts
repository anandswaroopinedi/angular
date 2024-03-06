import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  rooms=[
    {
      roomNumber:1,
      eminities:"Ac,fridge,tv",
      photo:"xxxxx",
      roomType:"deluxe",
      price:500,
      checkInTime:new Date(),
      rating:2.3
    },
    {
      roomNumber:2,
      eminities:"Ac,fridge,tv",
      photo:"xxxxx",
      roomType:"general",
      price:200,
      checkInTime:new Date(),
      rating:2.6
    },
    {
      roomNumber:3,
      eminities:"Ac,fridge,tv,wm",
      photo:"xxxxx",
      roomType:"deluxe",
      price:800,
      checkInTime:new Date(),
      rating:3.567
    }]
  getRooms()
  {
    return this.rooms;
  }
  getPhotos()
  {
    const request=new HttpRequest('GET',`https://jsonplaceholder.typicode.com/photos`);
    // return this.http.request(request);
  }
}
