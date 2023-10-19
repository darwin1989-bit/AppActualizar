/* tslint:disable */
/* eslint-disable */
import { OfflinePaymentDto } from './offline-payment-dto';
import { OfflinePurchaseDto } from './offline-purchase-dto';
export interface TransactionsDto {
  agencia?: null | string;
  cliente?: null | string;
  fechaProceso?: string;
  idMovimiento?: null | string;
  numeroDocumento?: null | string;
  offlinePayments?: OfflinePaymentDto;
  offlinePurchases?: OfflinePurchaseDto;
  referenciaTransaccion?: null | string;
  tipoTransaccion?: null | string;
  userId?: null | string;
  valor?: null | number;
  valorCHQ?: null | number;
  valorEfectivo?: null | number;
}
