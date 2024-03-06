import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { HoverDirective } from '../hover.directive';
import { EmailValidatorDirective } from '../email-validator.directive';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,HoverDirective,EmailValidatorDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email: string="";
password: string="";
constructor(private route:Router)
{

}
login()
{
  if(this.email==="admin@gmail.com" && this.password==="admin")
  {
    this.route.navigate(['/rooms','add']);
  }
}
}
