import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { EstatesService, IEstate } from '../estates.service';

@Component({
  selector: 'app-estate-edit',
  templateUrl: './estate-edit.component.html',
  styleUrls: ['./estate-edit.component.css']
})
export class EstateEditComponent implements OnInit {

  estate!: IEstate;
  id: string = "";

  editEstateFormGroup: FormGroup = this.formBuilder.group({
    'img': new FormControl('', [Validators.required]),
    'price': new FormControl('', [Validators.required]),
    'address': new FormControl('', [Validators.required, Validators.minLength(6)]),
    'title': new FormControl('', [Validators.required, Validators.minLength(6)]),
    'description': new FormControl('', [Validators.required, Validators.minLength(30), Validators.maxLength(250)])
  })
  constructor(
    private formBuilder: FormBuilder,
    private estatesService: EstatesService,
    private router: Router,
    private activatedRoute: ActivatedRoute, 
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      tap(params => {
        this.id = params['id'];
      }),
      switchMap(params => {
        return this.estatesService.getOneEstate$(params['id'])
      })
    )
    .subscribe(estate => {
      this.estate = estate;
      console.log(this.estate);
      
    })
  }

  handleEditEstateForm(): void {
    const { img, price, address, title, description } = this.editEstateFormGroup.value;

    const estateData = {
      img: img,
      title: title,
      price: price,
      address: address,
      description: description,
    }
    console.log(1);
     this.estatesService.editEstate$(this.id, estateData).subscribe(() =>{
      this.router.navigate([`/catalog/${this.id}`]); 
     });

  }

}
