import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { EstatesService, IEstate } from '../estates.service';

@Component({
  selector: 'app-save-date-form',
  templateUrl: './save-date-form.component.html',
  styleUrls: ['./save-date-form.component.css']
})
export class SaveDateFormComponent implements OnInit {

  estate!: IEstate;
  id: string = "";

  saveDateFormGroup: FormGroup = this.formBuilder.group({
    'date': new FormControl('', [Validators.required]),
    'time': new FormControl('', [Validators.required]),
    'tel': new FormControl('', [Validators.required, Validators.minLength(6)]),
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

  handleSaveDateForm(): void {
    const { date, time, tel } = this.saveDateFormGroup.value;

    const formValue = {
      date: date,
      time: time,
      tel: tel,
    }
     this.estatesService.saveDate$(this.id, formValue).subscribe(() =>{
      this.router.navigate([`/catalog/${this.id}`]); 
     });

  }

}
