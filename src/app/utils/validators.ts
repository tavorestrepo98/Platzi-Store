import { AbstractControl } from '@angular/forms';

export class MyValidators {
    static isPriceVal(control: AbstractControl): object | null {
        const value = control.value;
        console.log(value);
        if (value > 100000){
            return {
                price_invalid: true
            };
        }else {
            return null;
        }
    }
}