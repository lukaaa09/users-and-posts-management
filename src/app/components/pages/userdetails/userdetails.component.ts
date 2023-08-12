import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../core/services/users.service';
import { ActivatedRoute,  Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit{
  currentUserId: any

  constructor(private _userService: UsersService, private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this.currentUserId = this._route.snapshot.paramMap.get('id')
    this.getUserDetails()
  }

  getUserDetails() {
    this._userService.getUserDetails(this.currentUserId).pipe(
      tap((res) => {
        console.log(res)
      })
    ).subscribe()
  }

  navigateToPosts(): void {
    this._router.navigateByUrl('/posts')
  }


}
