import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientRoutingModule } from "./client-routing.module";
import { PageUpdateClientComponent } from "./pages/page-update-client/page-update-client.component";
import { UpdateClientComponent } from "./components/update-client/update-client.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [PageUpdateClientComponent, UpdateClientComponent],
  imports: [CommonModule, ClientRoutingModule, SharedModule],
})
export class ClientModule {}
