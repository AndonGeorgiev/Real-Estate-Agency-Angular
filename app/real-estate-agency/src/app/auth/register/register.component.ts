import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordsMatch } from '../until';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  roles = [
    { value: 'buyer', name: 'Buyer' },
    { value: 'broker', name: 'Broker' }
  ];

  passwordControl = new FormControl('', [Validators.required, Validators.minLength(8)])
  registerFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': this.passwordControl,
    're-password': new FormControl('', [Validators.required, Validators.minLength(8), passwordsMatch(this.passwordControl)], ),
    'role': new FormControl('', [Validators.required])
  })
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  handleRegisterForm() : void {
    console.log(this.registerFormGroup.value);
    
  }

}
