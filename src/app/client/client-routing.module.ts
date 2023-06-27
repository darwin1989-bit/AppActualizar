import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageUpdateClientComponent } from "./pages/page-update-client/page-update-client.component";

const routes: Routes = [
  { path: "update-client", component: PageUpdateClientComponent },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
