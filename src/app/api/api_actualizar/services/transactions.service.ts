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

import { ResOfflinePaymentDto } from '../models/res-offline-payment-dto';
import { ResOfflinePurchaseDto } from '../models/res-offline-purchase-dto';
import { ResTransactionsDto } from '../models/res-transactions-dto';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTransactionsGet
   */
  static readonly ApiTransactionsGetPath = '/api/Transactions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTransactionsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionsGet$Plain$Response(params?: {
    ip?: string;
    numberId?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResTransactionsDto>> {

    const rb = new RequestBuilder(this.rootUrl, TransactionsService.ApiTransactionsGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResTransactionsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTransactionsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionsGet$Plain(params?: {
    ip?: string;
    numberId?: string;
  },
  context?: HttpContext

): Observable<ResTransactionsDto> {

    return this.apiTransactionsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResTransactionsDto>) => r.body as ResTransactionsDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTransactionsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionsGet$Json$Response(params?: {
    ip?: string;
    numberId?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResTransactionsDto>> {

    const rb = new RequestBuilder(this.rootUrl, TransactionsService.ApiTransactionsGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResTransactionsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTransactionsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionsGet$Json(params?: {
    ip?: string;
    numberId?: string;
  },
  context?: HttpContext

): Observable<ResTransactionsDto> {

    return this.apiTransactionsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResTransactionsDto>) => r.body as ResTransactionsDto)
    );
  }

  /**
   * Path part for operation apiTransactionsOfflinePaymentsGet
   */
  static readonly ApiTransactionsOfflinePaymentsGetPath = '/api/Transactions/offline_payments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTransactionsOfflinePaymentsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionsOfflinePaymentsGet$Plain$Response(params?: {
    ip?: string;
    numberId?: string;
    numberDoc?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResOfflinePaymentDto>> {

    const rb = new RequestBuilder(this.rootUrl, TransactionsService.ApiTransactionsOfflinePaymentsGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
      rb.query('numberDoc', params.numberDoc, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResOfflinePaymentDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTransactionsOfflinePaymentsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionsOfflinePaymentsGet$Plain(params?: {
    ip?: string;
    numberId?: string;
    numberDoc?: string;
  },
  context?: HttpContext

): Observable<ResOfflinePaymentDto> {

    return this.apiTransactionsOfflinePaymentsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResOfflinePaymentDto>) => r.body as ResOfflinePaymentDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTransactionsOfflinePaymentsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionsOfflinePaymentsGet$Json$Response(params?: {
    ip?: string;
    numberId?: string;
    numberDoc?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResOfflinePaymentDto>> {

    const rb = new RequestBuilder(this.rootUrl, TransactionsService.ApiTransactionsOfflinePaymentsGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
      rb.query('numberDoc', params.numberDoc, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResOfflinePaymentDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTransactionsOfflinePaymentsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionsOfflinePaymentsGet$Json(params?: {
    ip?: string;
    numberId?: string;
    numberDoc?: string;
  },
  context?: HttpContext

): Observable<ResOfflinePaymentDto> {

    return this.apiTransactionsOfflinePaymentsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResOfflinePaymentDto>) => r.body as ResOfflinePaymentDto)
    );
  }

  /**
   * Path part for operation apiTransactionsOfflinePurchaseGet
   */
  static readonly ApiTransactionsOfflinePurchaseGetPath = '/api/Transactions/offline_purchase';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTransactionsOfflinePurchaseGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionsOfflinePurchaseGet$Plain$Response(params?: {
    ip?: string;
    numberId?: string;
    numberDoc?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResOfflinePurchaseDto>> {

    const rb = new RequestBuilder(this.rootUrl, TransactionsService.ApiTransactionsOfflinePurchaseGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
      rb.query('numberDoc', params.numberDoc, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResOfflinePurchaseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTransactionsOfflinePurchaseGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionsOfflinePurchaseGet$Plain(params?: {
    ip?: string;
    numberId?: string;
    numberDoc?: string;
  },
  context?: HttpContext

): Observable<ResOfflinePurchaseDto> {

    return this.apiTransactionsOfflinePurchaseGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResOfflinePurchaseDto>) => r.body as ResOfflinePurchaseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTransactionsOfflinePurchaseGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionsOfflinePurchaseGet$Json$Response(params?: {
    ip?: string;
    numberId?: string;
    numberDoc?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResOfflinePurchaseDto>> {

    const rb = new RequestBuilder(this.rootUrl, TransactionsService.ApiTransactionsOfflinePurchaseGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
      rb.query('numberDoc', params.numberDoc, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResOfflinePurchaseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTransactionsOfflinePurchaseGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionsOfflinePurchaseGet$Json(params?: {
    ip?: string;
    numberId?: string;
    numberDoc?: string;
  },
  context?: HttpContext

): Observable<ResOfflinePurchaseDto> {

    return this.apiTransactionsOfflinePurchaseGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResOfflinePurchaseDto>) => r.body as ResOfflinePurchaseDto)
    );
  }

}
