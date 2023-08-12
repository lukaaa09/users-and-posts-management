import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => import('./components/pages/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'users/:id',
    loadChildren: () => import('./components/pages/userdetails/userdetails.module').then(m => m.UserdetailsModule)
  },
  {
    path: 'users/:id/posts',
    loadChildren: () => import('./components/pages/posts/posts.module').then(m => m.PostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
