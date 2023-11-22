/* tslint:disable */
/* eslint-disable */
import { Pointsconversionamount } from './pointsconversionamount';
import { Promotiondescriptionmultilanguage } from './promotiondescriptionmultilanguage';
export interface Pricederivationrule {
  applicationType?: null | string;
  appliedCount?: null | number;
  calculationBaseSequence?: null | string;
  customerGroupLoyaltyPointsDefaultQuantity?: null | number;
  discountMethodCode?: null | string;
  exclusiveFlag?: null | boolean;
  externalPromotionID?: null | string;
  frequentShopperPointsFlag?: null | boolean;
  noEffectOnSubsequentPriceDerivationRulesFlag?: null | boolean;
  pointsConversionAmount?: Pointsconversionamount;
  priceDerivationRuleID?: null | string;
  printoutValidityPeriod?: null | number;
  prohibitPrintFlag?: null | boolean;
  prohibitTransactionRelatedPriceDerivationRulesFlag?: null | boolean;
  promotionDescription?: null | string;
  promotionDescriptionMultiLanguage?: null | Array<Promotiondescriptionmultilanguage>;
  promotionOriginatorTypeCode?: null | string;
  promotionPriceDerivationRuleResolution?: null | number;
  promotionPriceDerivationRuleSequence?: null | number;
  promotionType?: null | string;
  transactionControlBreakCode?: null | string;
  triggerQuantity?: null | number;
}
