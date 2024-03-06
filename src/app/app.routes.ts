import { Routes,RouterLink } from '@angular/router';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'rooms',component:RoomsComponent,
    },
    {
        path:'rooms/:id',component:RoomsBookingComponent,
    },
    {
        path: 'rooms-list',component:RoomsListComponent
    },
    {
        path: 'header',component:HeaderComponent
    }
    ,
    {
        path:'login',component:LoginComponent
    },
    {
        path:'add',component:RoomsAddComponent,
        // loadChildren:()=>import('./rooms/rooms-add/rooms-add.component').then((m)=>m.RoomsAddComponent)
    },
    {
        path:'',redirectTo:'/login',pathMatch:'full'
    },
    {
        path:'**',component:NotfoundComponent
    },

];
