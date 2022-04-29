import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstatesService, IEstate } from '../estates.service';

@Component({
  selector: 'app-create-estate',
  templateUrl: './create-estate.component.html',
  styleUrls: ['./create-estate.component.css']
})
export class CreateEstateComponent implements OnInit {

  createEstateFormGroup: FormGroup = this.formBuilder.group({
    'img': new FormControl('', [Validators.required]),
    'price': new FormControl('', [Validators.required]),
    'address': new FormControl('', [Validators.required, Validators.minLength(6)]),
    'title': new FormControl('', [Validators.required, Validators.minLength(6)]),
    'description': new FormControl('', [Validators.required, Validators.minLength(30), Validators.maxLength(800)])
  })
  constructor(
    private formBuilder: FormBuilder,
    private estatesService: EstatesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  handleCreateEstateForm(): void {
    const { img, price, address, title, description } = this.createEstateFormGroup.value;

    const estateData = {
      img: img,
      title: title,
      price: price,
      address: address,
      description: description,
    }
    console.log(1);
     this.estatesService.createEstate$(estateData).subscribe(() =>{
      this.router.navigate(['/catalog']); 
     });

  }

}
