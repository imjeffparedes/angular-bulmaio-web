// Importing app modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing app components/directives
import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';


@NgModule({
  declarations: [UserListComponent, UserSingleComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [UserService]
})
export class UsersModule { }
