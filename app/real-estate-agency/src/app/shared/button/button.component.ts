import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() content: string='';
  @Input() url: string="";
  @Input() backgroundColor: string="#10566E";
  constructor() { }

  ngOnInit(): void {
  }

}
