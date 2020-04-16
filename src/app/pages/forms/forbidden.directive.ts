import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { forbiddenNameValidator } from './customValidator';

@Directive({
  selector: '[appForbidden]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenDirective, multi: true }]
})
export class ForbiddenDirective implements Validator {
  @Input('appForbidden') forbiddenName: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
  }

}
