import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstateCardComponent } from './estate-card/estate-card.component';
import { EstatesListComponent } from './estates-list/estates-list.component';
import { RouterModule } from '@angular/router';
import { EstateDetailsComponent } from './estate-details/estate-details.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EstateCardComponent,
    EstatesListComponent,
    EstateDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgbModule,
    FormsModule,
  ],
  exports: [
    EstatesListComponent,
    EstateDetailsComponent
  ],
  bootstrap:[EstateDetailsComponent]
})
export class EstatesModule { }
