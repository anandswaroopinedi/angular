import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-rooms-booking',
  standalone: true,
  imports: [RouterModule,MatIconModule,MatExpansionModule,CommonModule,ReactiveFormsModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.css'
})
export class RoomsBookingComponent  {
  bookingForm!:FormGroup;
  get guests()
  {
    return this.bookingForm.get('guests') as FormArray;
  }
  id$=this.router.paramMap.pipe(
    map(param=>param.get('id'))
  );
  constructor(private router:ActivatedRoute,private fb:FormBuilder)
  {
    this.bookingForm=this.fb.group({
      roomId: new FormControl(''),
      guestEmail:[''],
      checkinDate:[''],
      checkoutDate:[''],
      bookingStatus:[''],
      address:this.fb.group({
        addressLine1:[''],
        zipCode:[''],
        city:[''],
        state:[''],
        country:['']
      }),
      guests:this.fb.array([this.fb.group(
       { guestName:[''],
        age:['']
      })])
    })
    
    // this.router.params.subscribe((params)=>{
    //   this.id=params['id'];
    //   console.log(params['id']);
    // })
  }
  addbook()
  {
    console.log("anand");
    console.log(this.bookingForm.getRawValue());
  }
  addGuest()
  {
    this.guests.push({ guestName:[''],
    age:['']
  })
  }
  removeGuest(i:number)
  {
    this.guests.removeAt(i);
  }
}
