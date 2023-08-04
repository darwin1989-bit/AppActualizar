import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientRoutingModule } from "./client-routing.module";
import { PageUpdateClientComponent } from "./pages/page-update-client/page-update-client.component";
import { UpdateClientComponent } from "./components/update-client/update-client.component";
import { SharedModule } from "../shared/shared.module";
import { FindClientComponent } from './components/find-client/find-client.component';
import { RetentionComponent } from './components/retention/retention.component';

@NgModule({
  declarations: [PageUpdateClientComponent, UpdateClientComponent, FindClientComponent, RetentionComponent],
  imports: [CommonModule, ClientRoutingModule, SharedModule],
})
export class ClientModule {}
