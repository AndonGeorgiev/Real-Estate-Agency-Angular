import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
path : string = "app\real-estate-agency\src\app\picture\pngwing.com.png" 
  constructor() { }

  ngOnInit(): void {
  }

}
