/* tslint:disable */
/* eslint-disable */
import { Coupon } from './coupon';
import { Merchandisehierarchy } from './merchandisehierarchy';
import { Sale } from './sale';
export interface Lineitem {
  coupon?: Coupon;
  merchandiseHierarchy?: null | Array<Merchandisehierarchy>;
  sale?: Sale;
  sequenceNumber?: null | Array<number>;
}
