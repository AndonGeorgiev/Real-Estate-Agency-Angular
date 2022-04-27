import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  get isUser(): any {
    return window.localStorage.getItem("user")
  }
 get isBroker(): boolean {
    if(window.localStorage.getItem("user")){
      let user = JSON.parse(window.localStorage.getItem("user" )|| '{}');
      let isBroker = user.user.role == "broker";
      return isBroker;
    }else{
      return false;
    }
  }

  logout() : void {
    window.localStorage.clear();
  }

}
