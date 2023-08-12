import {NgModule} from '@angular/core';
import {UserdetailsComponent} from './userdetails.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    UserdetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: UserdetailsComponent
    }])
  ],
  exports: [UserdetailsComponent]
})
export class UserdetailsModule{}
