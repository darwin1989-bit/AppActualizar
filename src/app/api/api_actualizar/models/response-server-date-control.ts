/* tslint:disable */
/* eslint-disable */
import { NoConnection } from './no-connection';
import { ServerDateControlDto } from './server-date-control-dto';
export interface ResponseServerDateControl {
  data?: null | Array<ServerDateControlDto>;
  noConnections?: null | Array<NoConnection>;
}
