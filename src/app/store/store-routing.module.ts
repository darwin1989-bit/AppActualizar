import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageOpenBoxesComponent } from "./pages/page-open-boxes/page-open-boxes.component";
import { PageIpBoxesComponent } from "./pages/page-ip-boxes/page-ip-boxes.component";
import { PageOfficesComponent } from "./pages/page-offices/page-offices.component";
import { PageVoucherStoreComponent } from "./pages/page-voucher-store/page-voucher-store.component";
import { PageGiftCardComponent } from "./pages/page-gift-card/page-gift-card.component";

const routes: Routes = [
  { path: "open-boxes", component: PageOpenBoxesComponent },
  { path: "ip-boxes", component: PageIpBoxesComponent },
  { path: "offices", component: PageOfficesComponent },
  { path: "voucher", component: PageVoucherStoreComponent },
  { path: "gift-card", component: PageGiftCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
