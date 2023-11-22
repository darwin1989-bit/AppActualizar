/* tslint:disable */
/* eslint-disable */
import { Amount } from './amount';
import { Computationbaseamount } from './computationbaseamount';
import { Extraamount } from './extraamount';
import { Newprice } from './newprice';
import { Percent } from './percent';
import { Previousprice } from './previousprice';
import { Pricederivationrule } from './pricederivationrule';
import { Promotionid } from './promotionid';
import { Quantity1 } from './quantity-1';
import { Rounding } from './rounding';
export interface Retailpricemodifier {
  amount?: Amount;
  computationBaseAmount?: Computationbaseamount;
  externalSystemOriginatorFlag?: null | boolean;
  extraAmount?: Extraamount;
  newPrice?: Newprice;
  percent?: Percent;
  previousPrice?: Previousprice;
  priceDerivationRule?: null | Array<Pricederivationrule>;
  promotionID?: Promotionid;
  quantity?: Quantity1;
  rounding?: Rounding;
  sequenceNumber?: null | number;
}
