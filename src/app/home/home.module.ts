import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimeModule } from "../prime.module";
import { PageHomeComponent } from "./pages/page-home/page-home.component";
import { TaskComponent } from "./components/payFrom/task.component";
import { SpaceDiskComponent } from "./components/space-disk/space-disk.component";
import { FilesSabanaComponent } from "./components/files-sabana/files-sabana.component";
import { SummaryPayFromComponent } from './components/summary-pay-from/summary-pay-from.component';
import { SummaryJobsErrorComponent } from './components/summary-jobs-error/summary-jobs-error.component';

@NgModule({
  declarations: [PageHomeComponent, TaskComponent, SpaceDiskComponent, FilesSabanaComponent, SummaryPayFromComponent, SummaryJobsErrorComponent],
  imports: [CommonModule, PrimeModule],
  exports: [PageHomeComponent],
})
export class HomeModule {}
