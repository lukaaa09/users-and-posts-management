import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component:  UsersComponent
  },
  {
    path: 'userDetails/:id',
    loadChildren: () => import('./components/pages/userdetails/userdetails.module').then(m => m.UserdetailsModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./components/pages/posts/posts.module').then(m => m.PostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
