import { Component, OnInit } from '@angular/core';
import { EstatesService, IEstate } from '../estates.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-estate-details',
  templateUrl: './estate-details.component.html',
  styleUrls: ['./estate-details.component.css']
})
export class EstateDetailsComponent implements OnInit {
  model?: NgbDateStruct;
  time = {hour: 10, minute: 10};
  estate!: IEstate;
  id: string = "";

  constructor(private activatedRoute: ActivatedRoute, private estatesService: EstatesService) { }

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .pipe(
    //     tap(params => {
    //       this.id = params['id']
    //     })
    //   );

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
        console.log(this.id);
      })
  }

}
