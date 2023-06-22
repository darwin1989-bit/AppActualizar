import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimeModule } from "../prime.module";
import { PageHomeComponent } from "./pages/page-home/page-home.component";
import { TaskComponent } from "./components/task/task.component";
import { SpaceDiskComponent } from "./components/space-disk/space-disk.component";

@NgModule({
  declarations: [PageHomeComponent, TaskComponent, SpaceDiskComponent],
  imports: [CommonModule, PrimeModule],
  exports: [PageHomeComponent],
})
export class HomeModule {}
