import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup : FormGroup = this.formBuilder.group({
    'email': new FormControl('',[Validators.required, Validators.email]),
    'password': new FormControl('',[Validators.required, Validators.minLength(8)])
  })
  constructor(
    private formBuilder : FormBuilder,
  ) { }

  ngOnInit(): void {
  }
  handleLoginForm(): void {
    console.log('testing');
    
  }
}
