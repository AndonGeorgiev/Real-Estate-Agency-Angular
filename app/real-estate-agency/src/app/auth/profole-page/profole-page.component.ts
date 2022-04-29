import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profole-page',
  templateUrl: './profole-page.component.html',
  styleUrls: ['./profole-page.component.css']
})
export class ProfolePageComponent implements OnInit {

  userInfo! : any;
  userEstates! : any;
  likesEstates! : any;
  id! : any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getProfileInfo();
  }

  getProfileInfo():void{
    this.id = this.userService.getUserId();
    this.userService.getProfile$(this.id).subscribe(profile => {
      this.userInfo = profile.userData;
      this.userEstates = profile.properties;
      this.likesEstates = profile.getLikesProperties;
    });
  }

}
