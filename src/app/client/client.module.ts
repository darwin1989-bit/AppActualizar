import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientRoutingModule } from "./client-routing.module";
import { PageUpdateClientComponent } from "./pages/page-update-client/page-update-client.component";
import { UpdateClientComponent } from "./components/update-clients/update-client/update-client.component";
import { SharedModule } from "../shared/shared.module";
import { FindClientComponent } from "./components/update-clients/find-client/find-client.component";
import { RetentionComponent } from "./components/update-clients/retention/retention.component";
import { PageInvoicesComponent } from "./pages/page-invoices/page-invoices.component";
import { FindInvoicesComponent } from "./components/invoices/find-invoices/find-invoices.component";
import { InvoicesComponent } from "./components/invoices/invoices/invoices.component";
import { InvoicesStoreComponent } from "./components/invoices/invoices-store/invoices-store.component";
import { InvoiceDetailsComponent } from "./components/invoices/invoice-details/invoice-details.component";
import { FindPaymentsComponent } from "./components/payments/find-payments/find-payments.component";
import { PagePaymentsComponent } from "./pages/page-payments/page-payments.component";
import { PaymentsComponent } from "./components/payments/payments/payments.component";
import { PageCreditServiceComponent } from "./pages/page-credit-service/page-credit-service.component";
import { FindClientCreditComponent } from "./components/service-credit/find-client-credit/find-client-credit.component";
import { ClientCreditComponent } from "./components/service-credit/client-credit/client-credit.component";
import { PageTransactionsComponent } from "./pages/page-transactions/page-transactions.component";
import FindTransactionsComponent from "./components/transactions/find-transactions/find-transactions.component";
import { TransactionsComponent } from "./components/transactions/transactions/transactions.component";
import { TransactionsOfflineComponent } from "./components/transactions/transactions-offline/transactions-offline.component";
import { CreditNoteComponent } from "./components/invoices/credit-note/credit-note.component";
import { EditClientComponent } from './components/update-clients/update-client/edit-client/edit-client.component';

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
    FindPaymentsComponent,
    PagePaymentsComponent,
    PaymentsComponent,
    PageCreditServiceComponent,
    FindClientCreditComponent,
    ClientCreditComponent,
    PageTransactionsComponent,
    FindTransactionsComponent,
    TransactionsComponent,
    TransactionsOfflineComponent,
    CreditNoteComponent,
    EditClientComponent,
  ],
  imports: [CommonModule, ClientRoutingModule, SharedModule],
})
export class ClientModule {}
