/* tslint:disable */
/* eslint-disable */
import { Datetime1 } from './datetime-1';
import { Shoppingbasket } from './shoppingbasket';
import { Transactionid } from './transactionid';
export interface Pricecalculatebody {
  calculationMode?: null | string;
  dateTime?: Datetime1;
  netPriceFlag?: null | boolean;
  shoppingBasket?: Shoppingbasket;
  transactionID?: Transactionid;
  transactionType?: null | string;
}
