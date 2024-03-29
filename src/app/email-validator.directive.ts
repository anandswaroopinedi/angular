import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  standalone:true,
  providers:[
    {provide:NG_VALIDATORS,useExisting:EmailValidatorDirective,multi:true},
  ],
})
export class EmailValidatorDirective implements Validator {

  constructor() { }
  validate(control:AbstractControl):ValidationErrors|null{
    const value=control.value as string;
    if(value.includes('true')){
      return {
        invalidEmail:true
      }
    }
    return null;
  }
}
