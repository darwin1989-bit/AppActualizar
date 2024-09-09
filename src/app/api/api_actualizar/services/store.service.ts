/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { IpClientDto } from '../models/ip-client-dto';
import { ResponseDataVoucher } from '../models/response-data-voucher';
import { ResponseGiftCard } from '../models/response-gift-card';
import { ResponseInformationGiftCard } from '../models/response-information-gift-card';
import { ResponseIpClient } from '../models/response-ip-client';
import { ResponseMessage } from '../models/response-message';
import { ResponseOpenBoxes } from '../models/response-open-boxes';
import { ResponsePrintVoucher } from '../models/response-print-voucher';
import { ResponseStoreOffices } from '../models/response-store-offices';
import { VoucherDto } from '../models/voucher-dto';

@Injectable({
  providedIn: 'root',
})
export class StoreService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiStoreOpenBoxesGet
   */
  static readonly ApiStoreOpenBoxesGetPath = '/api/Store/open_boxes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreOpenBoxesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreOpenBoxesGet$Plain$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseOpenBoxes>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreOpenBoxesGetPath, 'get');
    if (params) {
      rb.query('company', params.company, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseOpenBoxes>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreOpenBoxesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreOpenBoxesGet$Plain(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponseOpenBoxes> {

    return this.apiStoreOpenBoxesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseOpenBoxes>) => r.body as ResponseOpenBoxes)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreOpenBoxesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreOpenBoxesGet$Json$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseOpenBoxes>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreOpenBoxesGetPath, 'get');
    if (params) {
      rb.query('company', params.company, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseOpenBoxes>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreOpenBoxesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreOpenBoxesGet$Json(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponseOpenBoxes> {

    return this.apiStoreOpenBoxesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseOpenBoxes>) => r.body as ResponseOpenBoxes)
    );
  }

  /**
   * Path part for operation apiStoreIpClientGet
   */
  static readonly ApiStoreIpClientGetPath = '/api/Store/ip_client';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreIpClientGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreIpClientGet$Plain$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseIpClient>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreIpClientGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseIpClient>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreIpClientGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreIpClientGet$Plain(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseIpClient> {

    return this.apiStoreIpClientGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseIpClient>) => r.body as ResponseIpClient)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreIpClientGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreIpClientGet$Json$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseIpClient>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreIpClientGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseIpClient>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreIpClientGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreIpClientGet$Json(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseIpClient> {

    return this.apiStoreIpClientGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseIpClient>) => r.body as ResponseIpClient)
    );
  }

  /**
   * Path part for operation apiStoreInsertIpClientPost
   */
  static readonly ApiStoreInsertIpClientPostPath = '/api/Store/insert/ipClient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreInsertIpClientPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStoreInsertIpClientPost$Plain$Response(params?: {
    ip?: string;
    body?: IpClientDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMessage>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreInsertIpClientPostPath, 'post');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMessage>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreInsertIpClientPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStoreInsertIpClientPost$Plain(params?: {
    ip?: string;
    body?: IpClientDto
  },
  context?: HttpContext

): Observable<ResponseMessage> {

    return this.apiStoreInsertIpClientPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMessage>) => r.body as ResponseMessage)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreInsertIpClientPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStoreInsertIpClientPost$Json$Response(params?: {
    ip?: string;
    body?: IpClientDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMessage>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreInsertIpClientPostPath, 'post');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMessage>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreInsertIpClientPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStoreInsertIpClientPost$Json(params?: {
    ip?: string;
    body?: IpClientDto
  },
  context?: HttpContext

): Observable<ResponseMessage> {

    return this.apiStoreInsertIpClientPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMessage>) => r.body as ResponseMessage)
    );
  }

  /**
   * Path part for operation apiStoreStoreOfficesGet
   */
  static readonly ApiStoreStoreOfficesGetPath = '/api/Store/store_offices';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreStoreOfficesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreStoreOfficesGet$Plain$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseStoreOffices>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreStoreOfficesGetPath, 'get');
    if (params) {
      rb.query('company', params.company, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseStoreOffices>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreStoreOfficesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreStoreOfficesGet$Plain(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponseStoreOffices> {

    return this.apiStoreStoreOfficesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseStoreOffices>) => r.body as ResponseStoreOffices)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreStoreOfficesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreStoreOfficesGet$Json$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseStoreOffices>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreStoreOfficesGetPath, 'get');
    if (params) {
      rb.query('company', params.company, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseStoreOffices>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreStoreOfficesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreStoreOfficesGet$Json(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponseStoreOffices> {

    return this.apiStoreStoreOfficesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseStoreOffices>) => r.body as ResponseStoreOffices)
    );
  }

  /**
   * Path part for operation apiStoreCardPlotsGet
   */
  static readonly ApiStoreCardPlotsGetPath = '/api/Store/card_plots';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreCardPlotsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreCardPlotsGet$Plain$Response(params?: {
    ip?: string;
    transactionDate?: string;
    amount?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDataVoucher>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreCardPlotsGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('transactionDate', params.transactionDate, {});
      rb.query('amount', params.amount, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseDataVoucher>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreCardPlotsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreCardPlotsGet$Plain(params?: {
    ip?: string;
    transactionDate?: string;
    amount?: string;
  },
  context?: HttpContext

): Observable<ResponseDataVoucher> {

    return this.apiStoreCardPlotsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDataVoucher>) => r.body as ResponseDataVoucher)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreCardPlotsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreCardPlotsGet$Json$Response(params?: {
    ip?: string;
    transactionDate?: string;
    amount?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDataVoucher>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreCardPlotsGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('transactionDate', params.transactionDate, {});
      rb.query('amount', params.amount, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseDataVoucher>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreCardPlotsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreCardPlotsGet$Json(params?: {
    ip?: string;
    transactionDate?: string;
    amount?: string;
  },
  context?: HttpContext

): Observable<ResponseDataVoucher> {

    return this.apiStoreCardPlotsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDataVoucher>) => r.body as ResponseDataVoucher)
    );
  }

  /**
   * Path part for operation apiStoreVoucherPrintPost
   */
  static readonly ApiStoreVoucherPrintPostPath = '/api/Store/voucher/print';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreVoucherPrintPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStoreVoucherPrintPost$Plain$Response(params?: {
    ip?: string;
    office?: string;
    body?: VoucherDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponsePrintVoucher>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreVoucherPrintPostPath, 'post');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('office', params.office, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponsePrintVoucher>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreVoucherPrintPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStoreVoucherPrintPost$Plain(params?: {
    ip?: string;
    office?: string;
    body?: VoucherDto
  },
  context?: HttpContext

): Observable<ResponsePrintVoucher> {

    return this.apiStoreVoucherPrintPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponsePrintVoucher>) => r.body as ResponsePrintVoucher)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreVoucherPrintPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStoreVoucherPrintPost$Json$Response(params?: {
    ip?: string;
    office?: string;
    body?: VoucherDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponsePrintVoucher>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreVoucherPrintPostPath, 'post');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('office', params.office, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponsePrintVoucher>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreVoucherPrintPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStoreVoucherPrintPost$Json(params?: {
    ip?: string;
    office?: string;
    body?: VoucherDto
  },
  context?: HttpContext

): Observable<ResponsePrintVoucher> {

    return this.apiStoreVoucherPrintPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponsePrintVoucher>) => r.body as ResponsePrintVoucher)
    );
  }

  /**
   * Path part for operation apiStoreGiftcardsCompanyNumberGiftCardGet
   */
  static readonly ApiStoreGiftcardsCompanyNumberGiftCardGetPath = '/api/Store/giftcards/{company}/{numberGiftCard}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreGiftcardsCompanyNumberGiftCardGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGiftcardsCompanyNumberGiftCardGet$Plain$Response(params: {
    company: string;
    numberGiftCard: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseGiftCard>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreGiftcardsCompanyNumberGiftCardGetPath, 'get');
    if (params) {
      rb.path('company', params.company, {});
      rb.path('numberGiftCard', params.numberGiftCard, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseGiftCard>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreGiftcardsCompanyNumberGiftCardGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGiftcardsCompanyNumberGiftCardGet$Plain(params: {
    company: string;
    numberGiftCard: string;
  },
  context?: HttpContext

): Observable<ResponseGiftCard> {

    return this.apiStoreGiftcardsCompanyNumberGiftCardGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseGiftCard>) => r.body as ResponseGiftCard)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreGiftcardsCompanyNumberGiftCardGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGiftcardsCompanyNumberGiftCardGet$Json$Response(params: {
    company: string;
    numberGiftCard: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseGiftCard>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreGiftcardsCompanyNumberGiftCardGetPath, 'get');
    if (params) {
      rb.path('company', params.company, {});
      rb.path('numberGiftCard', params.numberGiftCard, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseGiftCard>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreGiftcardsCompanyNumberGiftCardGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGiftcardsCompanyNumberGiftCardGet$Json(params: {
    company: string;
    numberGiftCard: string;
  },
  context?: HttpContext

): Observable<ResponseGiftCard> {

    return this.apiStoreGiftcardsCompanyNumberGiftCardGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseGiftCard>) => r.body as ResponseGiftCard)
    );
  }

  /**
   * Path part for operation apiStoreGiftcardsCompanyIdentificationIdentificationGet
   */
  static readonly ApiStoreGiftcardsCompanyIdentificationIdentificationGetPath = '/api/Store/giftcards/{company}/identification/{identification}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreGiftcardsCompanyIdentificationIdentificationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGiftcardsCompanyIdentificationIdentificationGet$Plain$Response(params: {
    company: string;
    identification: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseGiftCard>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreGiftcardsCompanyIdentificationIdentificationGetPath, 'get');
    if (params) {
      rb.path('company', params.company, {});
      rb.path('identification', params.identification, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseGiftCard>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreGiftcardsCompanyIdentificationIdentificationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGiftcardsCompanyIdentificationIdentificationGet$Plain(params: {
    company: string;
    identification: string;
  },
  context?: HttpContext

): Observable<ResponseGiftCard> {

    return this.apiStoreGiftcardsCompanyIdentificationIdentificationGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseGiftCard>) => r.body as ResponseGiftCard)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreGiftcardsCompanyIdentificationIdentificationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGiftcardsCompanyIdentificationIdentificationGet$Json$Response(params: {
    company: string;
    identification: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseGiftCard>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreGiftcardsCompanyIdentificationIdentificationGetPath, 'get');
    if (params) {
      rb.path('company', params.company, {});
      rb.path('identification', params.identification, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseGiftCard>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreGiftcardsCompanyIdentificationIdentificationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGiftcardsCompanyIdentificationIdentificationGet$Json(params: {
    company: string;
    identification: string;
  },
  context?: HttpContext

): Observable<ResponseGiftCard> {

    return this.apiStoreGiftcardsCompanyIdentificationIdentificationGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseGiftCard>) => r.body as ResponseGiftCard)
    );
  }

  /**
   * Path part for operation apiStoreGiftcardsInformationCompanyNumberGiftCardGet
   */
  static readonly ApiStoreGiftcardsInformationCompanyNumberGiftCardGetPath = '/api/Store/giftcards/information/{company}/{numberGiftCard}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreGiftcardsInformationCompanyNumberGiftCardGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGiftcardsInformationCompanyNumberGiftCardGet$Plain$Response(params: {
    company: string;
    numberGiftCard: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInformationGiftCard>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreGiftcardsInformationCompanyNumberGiftCardGetPath, 'get');
    if (params) {
      rb.path('company', params.company, {});
      rb.path('numberGiftCard', params.numberGiftCard, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseInformationGiftCard>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreGiftcardsInformationCompanyNumberGiftCardGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGiftcardsInformationCompanyNumberGiftCardGet$Plain(params: {
    company: string;
    numberGiftCard: string;
  },
  context?: HttpContext

): Observable<ResponseInformationGiftCard> {

    return this.apiStoreGiftcardsInformationCompanyNumberGiftCardGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInformationGiftCard>) => r.body as ResponseInformationGiftCard)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreGiftcardsInformationCompanyNumberGiftCardGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGiftcardsInformationCompanyNumberGiftCardGet$Json$Response(params: {
    company: string;
    numberGiftCard: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInformationGiftCard>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreGiftcardsInformationCompanyNumberGiftCardGetPath, 'get');
    if (params) {
      rb.path('company', params.company, {});
      rb.path('numberGiftCard', params.numberGiftCard, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseInformationGiftCard>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreGiftcardsInformationCompanyNumberGiftCardGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGiftcardsInformationCompanyNumberGiftCardGet$Json(params: {
    company: string;
    numberGiftCard: string;
  },
  context?: HttpContext

): Observable<ResponseInformationGiftCard> {

    return this.apiStoreGiftcardsInformationCompanyNumberGiftCardGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInformationGiftCard>) => r.body as ResponseInformationGiftCard)
    );
  }

}
