/* tslint:disable */
/* eslint-disable */
import { DataPromotion } from './data-promotion';
import { ResponsePromotion } from './response-promotion';
export interface MaterialPromotionDto {
  fecha?: null | string;
  id?: null | string;
  mensaje?: null | string;
  oficina?: null | string;
  responsePromotion?: null | Array<ResponsePromotion>;
  respuestaPromocion?: DataPromotion;
}
