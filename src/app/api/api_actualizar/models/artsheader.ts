/* tslint:disable */
/* eslint-disable */
import { Businessunit } from './businessunit';
import { Datetime } from './datetime';
import { Messageid } from './messageid';
import { Response } from './response';
export interface Artsheader {
  actionCode?: null | string;
  businessUnit?: null | Array<Businessunit>;
  dateTime?: null | Array<Datetime>;
  messageID?: Messageid;
  messageType?: null | string;
  response?: Response;
}
