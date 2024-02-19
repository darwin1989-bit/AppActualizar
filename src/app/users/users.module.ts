import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { SharedModule } from "../shared/shared.module";
import { PageUsersComponent } from "./pages/page-users/page-users.component";
import { PageAuthorizingUserComponent } from "./pages/page-authorizing-user/page-authorizing-user.component";
import { PageRegisteredUsersComponent } from "./pages/page-registered-users/page-registered-users.component";
import { FindUsersComponent } from "./components/store-users/find-users/find-users.component";
import { ResultStoreUsersComponent } from './components/store-users/result-store-users/result-store-users.component';
import { ResultMainUsersComponent } from './components/store-users/result-main-users/result-main-users.component';
import { EditUserComponent } from './components/store-users/edit-user/edit-user.component';
import { ResultUsersAuthorizingComponent } from './components/authorizing-users/result-users-authorizing/result-users-authorizing.component';

@NgModule({
  declarations: [PageUsersComponent, PageAuthorizingUserComponent, PageRegisteredUsersComponent, FindUsersComponent, ResultStoreUsersComponent, ResultMainUsersComponent, EditUserComponent, ResultUsersAuthorizingComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}
