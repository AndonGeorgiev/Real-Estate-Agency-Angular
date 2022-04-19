import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  registerFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
    're-password': new FormControl('', [Validators.required, Validators.minLength(8)]),
    'role': new FormControl('', [Validators.required])
  })
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  handleRegisterForm() : void {

  }

}
