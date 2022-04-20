import { AbstractControl } from "@angular/forms";

export function passwordsMatch(passwordFormControl: AbstractControl){
    return (rePasswordFormControl: AbstractControl) => {
        if(passwordFormControl.value !== rePasswordFormControl.value){
            return {
                passwordsMatch: true
            }
        }

        return null;
    }
}