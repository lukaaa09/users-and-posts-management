import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PostsService } from '../../../core/services/posts.service';
import { BehaviorSubject, tap } from 'rxjs';
import { PostsModel } from '../../../core/models/posts-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit{
  currentUserId: number = 0

  posts: BehaviorSubject<PostsModel[]> = new BehaviorSubject<PostsModel[]>([])

  constructor(private _postsService: PostsService, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    const userId = this._route.snapshot.paramMap.get('id')
    this.currentUserId =  userId ?  +userId : 0
    this.getPosts()
  }

  getPosts() {
    this._postsService.getPosts().pipe(
      tap((res) => {
        const filteredPosts = res.filter((post) => post.userId === this.currentUserId)
        this.posts.next(filteredPosts)
      }
    )).subscribe()
  }
}
