/* tslint:disable */
/* eslint-disable */
import { NoConnection } from './no-connection';
import { PayFromDto } from './pay-from-dto';
export interface ResponsePayFrom {
  data?: null | Array<PayFromDto>;
  noConnections?: null | Array<NoConnection>;
}
