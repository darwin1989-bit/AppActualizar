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

import { ResponseAssignedSeller } from '../models/response-assigned-seller';
import { ResponseSeller } from '../models/response-seller';

@Injectable({
  providedIn: 'root',
})
export class SellersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSellersSapCodeGet
   */
  static readonly ApiSellersSapCodeGetPath = '/api/Sellers/sapCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellersSapCodeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersSapCodeGet$Plain$Response(params?: {
    ip?: string;
    sapCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseSeller>> {

    const rb = new RequestBuilder(this.rootUrl, SellersService.ApiSellersSapCodeGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('sapCode', params.sapCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseSeller>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSellersSapCodeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersSapCodeGet$Plain(params?: {
    ip?: string;
    sapCode?: string;
  },
  context?: HttpContext

): Observable<ResponseSeller> {

    return this.apiSellersSapCodeGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseSeller>) => r.body as ResponseSeller)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellersSapCodeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersSapCodeGet$Json$Response(params?: {
    ip?: string;
    sapCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseSeller>> {

    const rb = new RequestBuilder(this.rootUrl, SellersService.ApiSellersSapCodeGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('sapCode', params.sapCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseSeller>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSellersSapCodeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersSapCodeGet$Json(params?: {
    ip?: string;
    sapCode?: string;
  },
  context?: HttpContext

): Observable<ResponseSeller> {

    return this.apiSellersSapCodeGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseSeller>) => r.body as ResponseSeller)
    );
  }

  /**
   * Path part for operation apiSellersMainSapCodeGet
   */
  static readonly ApiSellersMainSapCodeGetPath = '/api/Sellers/main/sapCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellersMainSapCodeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersMainSapCodeGet$Plain$Response(params?: {
    company?: string;
    sapCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseSeller>> {

    const rb = new RequestBuilder(this.rootUrl, SellersService.ApiSellersMainSapCodeGetPath, 'get');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('sapCode', params.sapCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseSeller>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSellersMainSapCodeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersMainSapCodeGet$Plain(params?: {
    company?: string;
    sapCode?: string;
  },
  context?: HttpContext

): Observable<ResponseSeller> {

    return this.apiSellersMainSapCodeGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseSeller>) => r.body as ResponseSeller)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellersMainSapCodeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersMainSapCodeGet$Json$Response(params?: {
    company?: string;
    sapCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseSeller>> {

    const rb = new RequestBuilder(this.rootUrl, SellersService.ApiSellersMainSapCodeGetPath, 'get');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('sapCode', params.sapCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseSeller>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSellersMainSapCodeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersMainSapCodeGet$Json(params?: {
    company?: string;
    sapCode?: string;
  },
  context?: HttpContext

): Observable<ResponseSeller> {

    return this.apiSellersMainSapCodeGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseSeller>) => r.body as ResponseSeller)
    );
  }

  /**
   * Path part for operation apiSellersIdentificationGet
   */
  static readonly ApiSellersIdentificationGetPath = '/api/Sellers/identification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellersIdentificationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersIdentificationGet$Plain$Response(params?: {
    ip?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseSeller>> {

    const rb = new RequestBuilder(this.rootUrl, SellersService.ApiSellersIdentificationGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('identification', params.identification, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseSeller>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSellersIdentificationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersIdentificationGet$Plain(params?: {
    ip?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<ResponseSeller> {

    return this.apiSellersIdentificationGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseSeller>) => r.body as ResponseSeller)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellersIdentificationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersIdentificationGet$Json$Response(params?: {
    ip?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseSeller>> {

    const rb = new RequestBuilder(this.rootUrl, SellersService.ApiSellersIdentificationGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('identification', params.identification, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseSeller>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSellersIdentificationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersIdentificationGet$Json(params?: {
    ip?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<ResponseSeller> {

    return this.apiSellersIdentificationGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseSeller>) => r.body as ResponseSeller)
    );
  }

  /**
   * Path part for operation apiSellersMainIdentificationGet
   */
  static readonly ApiSellersMainIdentificationGetPath = '/api/Sellers/main/identification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellersMainIdentificationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersMainIdentificationGet$Plain$Response(params?: {
    company?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseSeller>> {

    const rb = new RequestBuilder(this.rootUrl, SellersService.ApiSellersMainIdentificationGetPath, 'get');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('identification', params.identification, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseSeller>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSellersMainIdentificationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersMainIdentificationGet$Plain(params?: {
    company?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<ResponseSeller> {

    return this.apiSellersMainIdentificationGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseSeller>) => r.body as ResponseSeller)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellersMainIdentificationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersMainIdentificationGet$Json$Response(params?: {
    company?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseSeller>> {

    const rb = new RequestBuilder(this.rootUrl, SellersService.ApiSellersMainIdentificationGetPath, 'get');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('identification', params.identification, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseSeller>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSellersMainIdentificationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersMainIdentificationGet$Json(params?: {
    company?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<ResponseSeller> {

    return this.apiSellersMainIdentificationGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseSeller>) => r.body as ResponseSeller)
    );
  }

  /**
   * Path part for operation apiSellersAssignedIdGet
   */
  static readonly ApiSellersAssignedIdGetPath = '/api/Sellers/assigned/id';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellersAssignedIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersAssignedIdGet$Plain$Response(params?: {
    ip?: string;
    id?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAssignedSeller>> {

    const rb = new RequestBuilder(this.rootUrl, SellersService.ApiSellersAssignedIdGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseAssignedSeller>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSellersAssignedIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersAssignedIdGet$Plain(params?: {
    ip?: string;
    id?: string;
  },
  context?: HttpContext

): Observable<ResponseAssignedSeller> {

    return this.apiSellersAssignedIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAssignedSeller>) => r.body as ResponseAssignedSeller)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellersAssignedIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersAssignedIdGet$Json$Response(params?: {
    ip?: string;
    id?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAssignedSeller>> {

    const rb = new RequestBuilder(this.rootUrl, SellersService.ApiSellersAssignedIdGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseAssignedSeller>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSellersAssignedIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersAssignedIdGet$Json(params?: {
    ip?: string;
    id?: string;
  },
  context?: HttpContext

): Observable<ResponseAssignedSeller> {

    return this.apiSellersAssignedIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAssignedSeller>) => r.body as ResponseAssignedSeller)
    );
  }

  /**
   * Path part for operation apiSellersMainAssignedIdGet
   */
  static readonly ApiSellersMainAssignedIdGetPath = '/api/Sellers/main/assigned/id';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellersMainAssignedIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersMainAssignedIdGet$Plain$Response(params?: {
    company?: string;
    id?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAssignedSeller>> {

    const rb = new RequestBuilder(this.rootUrl, SellersService.ApiSellersMainAssignedIdGetPath, 'get');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseAssignedSeller>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSellersMainAssignedIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersMainAssignedIdGet$Plain(params?: {
    company?: string;
    id?: string;
  },
  context?: HttpContext

): Observable<ResponseAssignedSeller> {

    return this.apiSellersMainAssignedIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAssignedSeller>) => r.body as ResponseAssignedSeller)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellersMainAssignedIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersMainAssignedIdGet$Json$Response(params?: {
    company?: string;
    id?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAssignedSeller>> {

    const rb = new RequestBuilder(this.rootUrl, SellersService.ApiSellersMainAssignedIdGetPath, 'get');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseAssignedSeller>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSellersMainAssignedIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersMainAssignedIdGet$Json(params?: {
    company?: string;
    id?: string;
  },
  context?: HttpContext

): Observable<ResponseAssignedSeller> {

    return this.apiSellersMainAssignedIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAssignedSeller>) => r.body as ResponseAssignedSeller)
    );
  }

  /**
   * Path part for operation apiSellersAssignedSapCodeGet
   */
  static readonly ApiSellersAssignedSapCodeGetPath = '/api/Sellers/assigned/sapCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellersAssignedSapCodeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersAssignedSapCodeGet$Plain$Response(params?: {
    ip?: string;
    SapCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAssignedSeller>> {

    const rb = new RequestBuilder(this.rootUrl, SellersService.ApiSellersAssignedSapCodeGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('SapCode', params.SapCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseAssignedSeller>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSellersAssignedSapCodeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersAssignedSapCodeGet$Plain(params?: {
    ip?: string;
    SapCode?: string;
  },
  context?: HttpContext

): Observable<ResponseAssignedSeller> {

    return this.apiSellersAssignedSapCodeGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAssignedSeller>) => r.body as ResponseAssignedSeller)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellersAssignedSapCodeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersAssignedSapCodeGet$Json$Response(params?: {
    ip?: string;
    SapCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAssignedSeller>> {

    const rb = new RequestBuilder(this.rootUrl, SellersService.ApiSellersAssignedSapCodeGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('SapCode', params.SapCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseAssignedSeller>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSellersAssignedSapCodeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersAssignedSapCodeGet$Json(params?: {
    ip?: string;
    SapCode?: string;
  },
  context?: HttpContext

): Observable<ResponseAssignedSeller> {

    return this.apiSellersAssignedSapCodeGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAssignedSeller>) => r.body as ResponseAssignedSeller)
    );
  }

  /**
   * Path part for operation apiSellersMainAssignedSapCodeGet
   */
  static readonly ApiSellersMainAssignedSapCodeGetPath = '/api/Sellers/main/assigned/sapCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellersMainAssignedSapCodeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersMainAssignedSapCodeGet$Plain$Response(params?: {
    company?: string;
    sapCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAssignedSeller>> {

    const rb = new RequestBuilder(this.rootUrl, SellersService.ApiSellersMainAssignedSapCodeGetPath, 'get');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('sapCode', params.sapCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseAssignedSeller>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSellersMainAssignedSapCodeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersMainAssignedSapCodeGet$Plain(params?: {
    company?: string;
    sapCode?: string;
  },
  context?: HttpContext

): Observable<ResponseAssignedSeller> {

    return this.apiSellersMainAssignedSapCodeGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAssignedSeller>) => r.body as ResponseAssignedSeller)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellersMainAssignedSapCodeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersMainAssignedSapCodeGet$Json$Response(params?: {
    company?: string;
    sapCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAssignedSeller>> {

    const rb = new RequestBuilder(this.rootUrl, SellersService.ApiSellersMainAssignedSapCodeGetPath, 'get');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('sapCode', params.sapCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseAssignedSeller>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSellersMainAssignedSapCodeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellersMainAssignedSapCodeGet$Json(params?: {
    company?: string;
    sapCode?: string;
  },
  context?: HttpContext

): Observable<ResponseAssignedSeller> {

    return this.apiSellersMainAssignedSapCodeGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAssignedSeller>) => r.body as ResponseAssignedSeller)
    );
  }

}
