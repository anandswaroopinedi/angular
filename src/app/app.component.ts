import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { ConatainerCompComponent } from './conatainer-comp/conatainer-comp.component';
import {RouterModule} from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    // template:`<h5>Hello World</h5><p>Anand</p>`,
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RoomsComponent, ConatainerCompComponent, RouterModule, NavBarComponent]
})
export class AppComponent {
  title = 'angularProject';
  @ViewChild('user',{read : ViewContainerRef})vcr!:ViewContainerRef;
  @ViewChild('admin',{static:true})admin!:ElementRef
  //ngAfterViewInit()
  //{
    //const refe=this.vcr.createComponent(RoomsComponent);
   // refe.instance.noOfRooms=50;
    //this.admin.nativeElement.innerText="Hii";
  //}
}
