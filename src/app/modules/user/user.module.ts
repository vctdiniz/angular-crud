import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';



@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule,
    FormsModule
  ],
  exports: [
    UserComponent,
    UserDetailComponent,
    UserListComponent
  ]
})
export class UserModule { }
