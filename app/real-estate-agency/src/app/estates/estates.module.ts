import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstateCardComponent } from './estate-card/estate-card.component';
import { EstatesListComponent } from './estates-list/estates-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EstateCardComponent,
    EstatesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    EstatesListComponent
  ]
})
export class EstatesModule { }
