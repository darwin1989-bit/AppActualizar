/* tslint:disable */
/* eslint-disable */
import { DatabaseSizeDto } from './database-size-dto';
import { NoConnection } from './no-connection';
export interface ResponseDatabaseSize {
  data?: null | Array<DatabaseSizeDto>;
  noConnections?: null | Array<NoConnection>;
}
