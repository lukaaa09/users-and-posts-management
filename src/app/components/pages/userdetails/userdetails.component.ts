import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '../../../core/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { UserModel } from '../../../core/models/user-model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserdetailsComponent implements OnInit{
  currentUserId: number = 0
  user: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>({} as UserModel)


  constructor(private _userService: UsersService, private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    const userId = this._route.snapshot.paramMap.get('id')
    this.currentUserId =  userId ?  +userId : 0
    this.getUserDetails()
  }

  getUserDetails() {
    this._userService.getUserDetails(this.currentUserId as number).pipe(
      tap((res) =>  this.user.next(res))
    ).subscribe()
  }

  navigateToPosts(): void {
    this._router.navigateByUrl(`/users/${this.currentUserId}/posts`).then()
  }


}
