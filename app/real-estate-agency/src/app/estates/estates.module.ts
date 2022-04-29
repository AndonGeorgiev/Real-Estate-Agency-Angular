import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstateCardComponent } from './estate-card/estate-card.component';
import { EstatesListComponent } from './estates-list/estates-list.component';
import { RouterModule } from '@angular/router';
import { EstateDetailsComponent } from './estate-details/estate-details.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEstateComponent } from './create-estate/create-estate.component';
import { EstateEditComponent } from './estate-edit/estate-edit.component';
import { SaveDateFormComponent } from './save-date-form/save-date-form.component';



@NgModule({
  declarations: [
    EstateCardComponent,
    EstatesListComponent,
    EstateDetailsComponent,
    CreateEstateComponent,
    EstateEditComponent,
    SaveDateFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    EstatesListComponent,
    EstateDetailsComponent,
    EstateDetailsComponent,
    EstateEditComponent,
    EstateCardComponent
  ],
  bootstrap:[EstateDetailsComponent]
})
export class EstatesModule { }
