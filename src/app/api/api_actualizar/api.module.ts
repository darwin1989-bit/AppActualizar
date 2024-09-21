/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ClientService } from './services/client.service';
import { DashboardService } from './services/dashboard.service';
import { InvoicesService } from './services/invoices.service';
import { LoginService } from './services/login.service';
import { MaterialsService } from './services/materials.service';
import { OfficesService } from './services/offices.service';
import { PaymentsService } from './services/payments.service';
import { SellersService } from './services/sellers.service';
import { ServerService } from './services/server.service';
import { ServiceCreditService } from './services/service-credit.service';
import { StoreService } from './services/store.service';
import { TransactionsService } from './services/transactions.service';
import { UserService } from './services/user.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ClientService,
    DashboardService,
    InvoicesService,
    LoginService,
    MaterialsService,
    OfficesService,
    PaymentsService,
    SellersService,
    ServerService,
    ServiceCreditService,
    StoreService,
    TransactionsService,
    UserService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
