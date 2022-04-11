import { Component, OnInit } from '@angular/core';
import {EstatesService, IEstate} from '../estates.service'

@Component({
  selector: 'app-estates-list',
  templateUrl: './estates-list.component.html',
  styleUrls: ['./estates-list.component.css']
})
export class EstatesListComponent implements OnInit {

  estates: IEstate[] =[];
  constructor(private estatesService: EstatesService) { }

  ngOnInit(): void {
    this.estatesService.getEstates$().subscribe(estates => {
      console.log(estates);
      this.estates = estates;
    })
  }

}
