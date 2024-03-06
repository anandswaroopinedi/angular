import {InjectionToken} from '@angular/core';
export const LocalStorageItem=new InjectionToken('local storage',{
    providedIn:'root',
    factory() {
        return localStorage; 
    },
})