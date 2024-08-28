import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreRoutingModule } from "./store-routing.module";
import { FindOpenBoxesComponent } from "./components/open-boxes/find-open-boxes/find-open-boxes.component";
import { ResultOpenBoxesComponent } from "./components/open-boxes/result-open-boxes/result-open-boxes.component";
import { PageOpenBoxesComponent } from "./pages/page-open-boxes/page-open-boxes.component";
import { SharedModule } from "../shared/shared.module";
import { FindIpBoxesComponent } from "./components/ip-boxes/find-ip-boxes/find-ip-boxes.component";
import { ResultIpBoxesComponent } from "./components/ip-boxes/result-ip-boxes/result-ip-boxes.component";
import { EditIpBoxesComponent } from "./components/ip-boxes/edit-ip-boxes/edit-ip-boxes.component";
import { NewIpBoxesComponent } from "./components/ip-boxes/new-ip-boxes/new-ip-boxes.component";
import { PageIpBoxesComponent } from "./pages/page-ip-boxes/page-ip-boxes.component";
import { PageOfficesComponent } from "./pages/page-offices/page-offices.component";
import { FindStoreOfficesComponent } from "./components/offices/find-store-offices/find-store-offices.component";
import { ResultStoreOfficesComponent } from "./components/offices/result-store-offices/result-store-offices.component";
import { PageVoucherStoreComponent } from "./pages/page-voucher-store/page-voucher-store.component";
import { FindVoucherComponent } from "./components/voucher/find-voucher/find-voucher.component";
import { ResultInvoicesVoucherComponent } from "./components/voucher/result-invoices-voucher/result-invoices-voucher.component";
import { ResultPaymentsVoucherComponent } from "./components/voucher/result-payments-voucher/result-payments-voucher.component";
import { ResultPlotsVoucherComponent } from './components/voucher/result-plots-voucher/result-plots-voucher.component';
import { InformationVoucherComponent } from './components/voucher/information-voucher/information-voucher.component';

@NgModule({
  declarations: [
    FindOpenBoxesComponent,
    ResultOpenBoxesComponent,
    PageOpenBoxesComponent,
    FindIpBoxesComponent,
    ResultIpBoxesComponent,
    EditIpBoxesComponent,
    NewIpBoxesComponent,
    PageIpBoxesComponent,
    PageOfficesComponent,
    FindStoreOfficesComponent,
    ResultStoreOfficesComponent,
    PageVoucherStoreComponent,
    FindVoucherComponent,
    ResultInvoicesVoucherComponent,
    ResultPaymentsVoucherComponent,
    ResultPlotsVoucherComponent,
    InformationVoucherComponent,
  ],
  imports: [CommonModule, StoreRoutingModule, SharedModule],
})
export class StoreModule {}
