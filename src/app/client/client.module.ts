import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientRoutingModule } from "./client-routing.module";
import { PageUpdateClientComponent } from "./pages/page-update-client/page-update-client.component";
import { UpdateClientComponent } from "./components/update-clients/update-client/update-client.component";
import { SharedModule } from "../shared/shared.module";
import { FindClientComponent } from "./components/update-clients/find-client/find-client.component";
import { RetentionComponent } from "./components/update-clients/retention/retention.component";
import { PageInvoicesComponent } from "./pages/page-invoices/page-invoices.component";
import { ClientComponentService } from "./service/client-component.service";
import { InvoicesComponentService } from "./service/invoices-component.service";
import { FindInvoicesComponent } from "./components/invoices/find-invoices/find-invoices.component";
import { InvoicesComponent } from "./components/invoices/invoices/invoices.component";
import { InvoicesStoreComponent } from "./components/invoices/invoices-store/invoices-store.component";
import { InvoiceDetailsComponent } from "./components/invoices/invoice-details/invoice-details.component";

@NgModule({
  declarations: [
    PageUpdateClientComponent,
    UpdateClientComponent,
    FindClientComponent,
    RetentionComponent,
    PageInvoicesComponent,
    FindInvoicesComponent,
    InvoicesComponent,
    InvoicesStoreComponent,
    InvoiceDetailsComponent,
  ],
  imports: [CommonModule, ClientRoutingModule, SharedModule],
  providers: [ClientComponentService, InvoicesComponentService],
})
export class ClientModule {}
