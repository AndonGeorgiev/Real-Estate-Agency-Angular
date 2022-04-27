import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserDto, IUser, UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user?: IUser;
  error?: any;

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  handleLoginForm(): void {

    const { email, password } = this.loginFormGroup.value;

    const body: any = {
      email: email,
      password: password,
    }



    this.userService.login$(body).subscribe((user) => {
      this.user = user;
      window.localStorage.setItem('user', JSON.stringify(user));

      this.router.navigate(['/catalog']);
    },(error) =>{
      this.error = error;
      
    })

  }
}
