import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageUsersComponent } from "./pages/page-users/page-users.component";
import { PageAuthorizingUserComponent } from "./pages/page-authorizing-user/page-authorizing-user.component";
import { PageRegisteredUsersComponent } from "./pages/page-registered-users/page-registered-users.component";

const routes: Routes = [
  { path: "users", component: PageUsersComponent },
  { path: "authorizing-user", component: PageAuthorizingUserComponent },
  { path: "registered-users", component: PageRegisteredUsersComponent },
  {
    path: "",
    redirectTo: "/app/home",
    pathMatch: "prefix",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
