import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstateCardComponent } from './estate-card/estate-card.component';
import { EstatesListComponent } from './estates-list/estates-list.component';
import { RouterModule } from '@angular/router';
import { EstateDetailsComponent } from './estate-details/estate-details.component';



@NgModule({
  declarations: [
    EstateCardComponent,
    EstatesListComponent,
    EstateDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    EstatesListComponent,
    EstateDetailsComponent
  ]
})
export class EstatesModule { }
