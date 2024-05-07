/* tslint:disable */
/* eslint-disable */
import { NoConnectionOpenBox } from './no-connection-open-box';
import { OpenBoxDto } from './open-box-dto';
export interface ResponseOpenBoxes {
  data?: null | Array<OpenBoxDto>;
  dataError?: null | Array<NoConnectionOpenBox>;
}
