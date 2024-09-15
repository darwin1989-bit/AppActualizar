import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ServersRoutingModule } from "./servers-routing.module";
import { PageJobExecutionsComponent } from "./pages/page-job-executions/page-job-executions.component";
import { PageDatabaseSizeComponent } from "./pages/page-database-size/page-database-size.component";
import { FindJobExecutionsComponent } from "./components/job-executions/find-job-executions/find-job-executions.component";
import { ResultJobExecutionsComponent } from "./components/job-executions/result-job-executions/result-job-executions.component";
import { ResultServerDateControlComponent } from "./components/job-executions/result-server-date-control/result-server-date-control.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [PageJobExecutionsComponent, PageDatabaseSizeComponent, FindJobExecutionsComponent, ResultJobExecutionsComponent, ResultServerDateControlComponent],
  imports: [CommonModule, ServersRoutingModule, SharedModule],
})
export class ServersModule {}
