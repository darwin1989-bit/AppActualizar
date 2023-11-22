/* tslint:disable */
/* eslint-disable */
import { Extendedamount } from './extendedamount';
import { Extendeddiscountamount } from './extendeddiscountamount';
import { Itemid } from './itemid';
import { Promotionpricederivationrulereference } from './promotionpricederivationrulereference';
import { Quantity } from './quantity';
import { Regularsalesunitprice } from './regularsalesunitprice';
import { Retailpricemodifier } from './retailpricemodifier';
export interface Sale {
  extendedAmount?: Extendedamount;
  extendedDiscountAmount?: Extendeddiscountamount;
  fixedPriceFlag?: null | boolean;
  frequentShopperPointsEligibilityFlag?: boolean;
  itemID?: null | Array<Itemid>;
  itemType?: null | string;
  nonDiscountableFlag?: null | boolean;
  nonPieceGoodFlag?: null | boolean;
  notConsideredByPriceEngineFlag?: boolean;
  priceTypeCode?: null | string;
  promotionPriceDerivationRuleReference?: null | Array<Promotionpricederivationrulereference>;
  quantity?: null | Array<Quantity>;
  regularSalesUnitPrice?: Regularsalesunitprice;
  retailPriceModifier?: null | Array<Retailpricemodifier>;
}
