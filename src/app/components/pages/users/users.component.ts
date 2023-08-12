import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { UserModel } from '../../../core/models/user-model';
import { UsersService } from '../../../core/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit{
  users: BehaviorSubject<UserModel[]> = new BehaviorSubject<UserModel[]>([])

  constructor(private _usersService: UsersService,private _router: Router) {
  }
  ngOnInit() {
    this._usersService.getUsers().pipe(
      tap(res => {
        this.users.next(res)
        console.log(res)
      })
    ).subscribe()
  }

  navigateToUserDetails(id: number): void {
    this._router.navigateByUrl(`/userDetails/${id}`)
  }

}
