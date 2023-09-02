/* tslint:disable */
/* eslint-disable */
import { InvoiceDetDto } from './invoice-det-dto';
import { MethodPaymentDto } from './method-payment-dto';
export interface InvoiceDetailsDto {
  invoiceMethodPayment?: null | Array<MethodPaymentDto>;
  invoicesDet?: null | Array<InvoiceDetDto>;
}
