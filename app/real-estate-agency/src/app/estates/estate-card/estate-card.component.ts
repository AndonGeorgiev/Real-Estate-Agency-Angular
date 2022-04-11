import { Component, Input, OnInit } from '@angular/core';
import{IEstate} from '../estates.service'

@Component({
  selector: 'app-estate-card',
  templateUrl: './estate-card.component.html',
  styleUrls: ['./estate-card.component.css']
})
export class EstateCardComponent implements OnInit {
 
  @Input() estate!: IEstate;
  constructor() { }

  ngOnInit(): void {
  }

}
