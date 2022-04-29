import { Component, OnInit } from '@angular/core';
import { EstatesService, IEstate } from '../estates.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'
import { UserService } from 'src/app/auth/user.service';
import { ChangeDetectionStrategy } from '@angular/compiler';


@Component({
  selector: 'app-estate-details',
  templateUrl: './estate-details.component.html',
  styleUrls: ['./estate-details.component.css'],
})
export class EstateDetailsComponent implements OnInit {
  model?: NgbDateStruct;
  estate!: IEstate;
  id: string = "";
  userId?: any;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private estatesService: EstatesService,
    private userService: UserService,
    private router: Router) { }

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
      })
      this.userId = this.userService.getUserId()
  }

  deleteHandle(): void {
    console.log(this.estate._id);

    this.estatesService.deleteEstate$(this.estate._id).subscribe(() => {
      this.router.navigate(['/catalog']);
    });
  }



  sellHandle(): void {
    this.userId = this.userService.getUserId()
    this.estatesService.sellEstate$(this.estate._id, this.userId).subscribe(() => {
      this.router.navigate(['/catalog']);
    });
  }

  get isLiked(): any {
    this.userId = this.userService.getUserId()
    let likers = this.estate.likers;
    let isLiked = likers.includes(this.userId);
    return isLiked;
  }

  addInLovesHandle(): void {
    this.userId = this.userService.getUserId()
    let likers = this.estate.likers;
    let isLiked = likers.includes(this.userId);

    if (!isLiked) {
      this.estatesService.like$(this.estate._id, this.userId).subscribe(() => {
        this.ngOnInit();
      })
    } else {
      this.estatesService.dislike$(this.estate._id, this.userId).subscribe(() => {
        this.ngOnInit();
      })
    }
  }

}
