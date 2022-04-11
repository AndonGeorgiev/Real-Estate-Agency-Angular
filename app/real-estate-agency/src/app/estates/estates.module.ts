import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstateCardComponent } from './estate-card/estate-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EstateCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
  ]
})
export class EstatesModule { }
