import { Component } from "@angular/core";
import { UsersDto } from "src/app/api/api_actualizar/models";
import { UsersService } from "src/app/users/service/users.service";

@Component({
  selector: "app-result-main-users",
  templateUrl: "./result-main-users.component.html",
  styleUrls: ["./result-main-users.component.scss"],
})
export class ResultMainUsersComponent {
  constructor(public usersService: UsersService) {}

  public editUser(user: UsersDto): void {
    this.usersService.openDialog(user);
  }
}
