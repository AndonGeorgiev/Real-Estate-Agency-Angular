import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProfolePageComponent } from './auth/profole-page/profole-page.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateEstateComponent } from './estates/create-estate/create-estate.component';
import { EstateDetailsComponent } from './estates/estate-details/estate-details.component';
import { EstateEditComponent } from './estates/estate-edit/estate-edit.component';
import { EstatesListComponent } from './estates/estates-list/estates-list.component';
import { SaveDateFormComponent } from './estates/save-date-form/save-date-form.component';
import { BrokerGuard } from './guards/broker.guard';
import { GuestGuard } from './guards/guest.guard';
import { ProfileGuard } from './guards/profile.guard';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    canActivate: [GuestGuard],
    path: '',
    component: HomeComponent,
  }, 
  {
    canActivate: [BrokerGuard],
    path: 'catalog/create',
    pathMatch: 'full',
    component: CreateEstateComponent,
  },
  {
    path: 'catalog',
    pathMatch: 'full',
    component: EstatesListComponent,
  },
  {
    path: 'catalog/:id',
    pathMatch: 'full',
    component: EstateDetailsComponent,
  },
  {
    canActivate: [BrokerGuard],
    path: 'catalog/edit/:id',
    pathMatch: 'full',
    component: EstateEditComponent,
  },
  {
    path: 'catalog/date/:id',
    pathMatch: 'full',
    component: SaveDateFormComponent,
  },
 
 
  {
    canActivate: [GuestGuard],
    path: 'login',
    component: LoginComponent,
  },
  {
    canActivate: [GuestGuard],
    path: 'register',
    component: RegisterComponent,
  },
  {
    canActivate: [ProfileGuard],
    path: 'profile',
    component: ProfolePageComponent,
  },
  
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
