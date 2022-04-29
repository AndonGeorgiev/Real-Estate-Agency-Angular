import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfolePageComponent } from './profole-page/profole-page.component';
import { EstatesModule } from '../estates/estates.module';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfolePageComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    EstatesModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ProfolePageComponent
  ]
})
export class AuthModule { }
