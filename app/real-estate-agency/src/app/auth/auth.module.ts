import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ]
})
export class AuthModule { }
