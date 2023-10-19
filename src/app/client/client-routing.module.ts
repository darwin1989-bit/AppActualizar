import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageUpdateClientComponent } from "./pages/page-update-client/page-update-client.component";
import { PageInvoicesComponent } from "./pages/page-invoices/page-invoices.component";
import { PagePaymentsComponent } from "./pages/page-payments/page-payments.component";
import { PageCreditServiceComponent } from "./pages/page-credit-service/page-credit-service.component";
import { PageTransactionsComponent } from "./pages/page-transactions/page-transactions.component";

const routes: Routes = [
  { path: "update-client", component: PageUpdateClientComponent },
  { path: "invoices", component: PageInvoicesComponent },
  { path: "payments", component: PagePaymentsComponent },
  { path: "credit-service", component: PageCreditServiceComponent },
  { path: "transactions", component: PageTransactionsComponent },
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
export class ClientRoutingModule {}
