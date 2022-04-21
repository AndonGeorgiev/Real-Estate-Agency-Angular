import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-estate',
  templateUrl: './create-estate.component.html',
  styleUrls: ['./create-estate.component.css']
})
export class CreateEstateComponent implements OnInit {

  createEstateFormGroup : FormGroup = this.formBuilder.group({
    'img': new FormControl('',[Validators.required]),
    'price': new FormControl('',[Validators.required]),
    'address': new FormControl('',[Validators.required, Validators.minLength(6)]),
    'title': new FormControl('',[Validators.required, Validators.minLength(6)]),
    'description': new FormControl('',[Validators.required, Validators.minLength(30), Validators.maxLength(250)])
  })
  constructor(
    private formBuilder : FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  handleCreateEstateForm() : void {
    console.log(this.createEstateFormGroup.value);
    
  }

}
