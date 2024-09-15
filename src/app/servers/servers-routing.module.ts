import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageJobExecutionsComponent } from "./pages/page-job-executions/page-job-executions.component";
import { PageDatabaseSizeComponent } from "./pages/page-database-size/page-database-size.component";

const routes: Routes = [
  { path: "job-executions", component: PageJobExecutionsComponent },
  { path: "database-size", component: PageDatabaseSizeComponent },
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
export class ServersRoutingModule {}
