import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordsMatch } from '../until';
import { CreateUserDto, UserService, IUser } from '../user.service';

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
  user?: IUser;
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(8)])
  registerFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': this.passwordControl,
    're-password': new FormControl('', [Validators.required, Validators.minLength(8), passwordsMatch(this.passwordControl)],),
    'role': new FormControl('', [Validators.required])
  })
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  handleRegisterForm(): void {
    console.log(this.registerFormGroup.value);

    const { email, password, role } = this.registerFormGroup.value;

    const body: CreateUserDto = {
      email: email,
      password: password,
      role: role,
    }



    this.userService.register$(body).subscribe((user) => {
      console.log(user);
      
      this.user=user;
      window.localStorage.setItem('user', JSON.stringify(user));

      this.router.navigate(['/catalog']);
    
     
    })

  }

}
