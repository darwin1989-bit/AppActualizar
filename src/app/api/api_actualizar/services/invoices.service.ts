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

import { InvoiceDetailsDto } from '../models/invoice-details-dto';
import { ResponseInvoiceDto } from '../models/response-invoice-dto';

@Injectable({
  providedIn: 'root',
})
export class InvoicesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiInvoicesNumberGet
   */
  static readonly ApiInvoicesNumberGetPath = '/api/Invoices/number';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesNumberGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesNumberGet$Plain$Response(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesNumberGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberInvoice', params.numberInvoice, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesNumberGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesNumberGet$Plain(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesNumberGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesNumberGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesNumberGet$Json$Response(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesNumberGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberInvoice', params.numberInvoice, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesNumberGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesNumberGet$Json(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesNumberGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * Path part for operation apiInvoicesIdentificationGet
   */
  static readonly ApiInvoicesIdentificationGetPath = '/api/Invoices/identification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesIdentificationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesIdentificationGet$Plain$Response(params?: {
    ip?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesIdentificationGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesIdentificationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesIdentificationGet$Plain(params?: {
    ip?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesIdentificationGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesIdentificationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesIdentificationGet$Json$Response(params?: {
    ip?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesIdentificationGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesIdentificationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesIdentificationGet$Json(params?: {
    ip?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesIdentificationGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * Path part for operation apiInvoicesAllInvoicesGet
   */
  static readonly ApiInvoicesAllInvoicesGetPath = '/api/Invoices/all_invoices';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesAllInvoicesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesAllInvoicesGet$Plain$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesAllInvoicesGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesAllInvoicesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesAllInvoicesGet$Plain(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesAllInvoicesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesAllInvoicesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesAllInvoicesGet$Json$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesAllInvoicesGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesAllInvoicesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesAllInvoicesGet$Json(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesAllInvoicesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * Path part for operation apiInvoicesNumberMainGet
   */
  static readonly ApiInvoicesNumberMainGetPath = '/api/Invoices/number/main';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesNumberMainGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesNumberMainGet$Plain$Response(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesNumberMainGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberInvoice', params.numberInvoice, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesNumberMainGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesNumberMainGet$Plain(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesNumberMainGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesNumberMainGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesNumberMainGet$Json$Response(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesNumberMainGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberInvoice', params.numberInvoice, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesNumberMainGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesNumberMainGet$Json(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesNumberMainGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * Path part for operation apiInvoicesIdentificationMainGet
   */
  static readonly ApiInvoicesIdentificationMainGetPath = '/api/Invoices/identification/main';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesIdentificationMainGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesIdentificationMainGet$Plain$Response(params?: {
    ip?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesIdentificationMainGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesIdentificationMainGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesIdentificationMainGet$Plain(params?: {
    ip?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesIdentificationMainGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesIdentificationMainGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesIdentificationMainGet$Json$Response(params?: {
    ip?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesIdentificationMainGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesIdentificationMainGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesIdentificationMainGet$Json(params?: {
    ip?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesIdentificationMainGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * Path part for operation apiInvoicesAllInvoicesMainGet
   */
  static readonly ApiInvoicesAllInvoicesMainGetPath = '/api/Invoices/all_invoices/main';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesAllInvoicesMainGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesAllInvoicesMainGet$Plain$Response(params?: {
    ip?: string;
    office?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesAllInvoicesMainGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('office', params.office, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesAllInvoicesMainGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesAllInvoicesMainGet$Plain(params?: {
    ip?: string;
    office?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesAllInvoicesMainGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesAllInvoicesMainGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesAllInvoicesMainGet$Json$Response(params?: {
    ip?: string;
    office?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesAllInvoicesMainGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('office', params.office, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesAllInvoicesMainGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesAllInvoicesMainGet$Json(params?: {
    ip?: string;
    office?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesAllInvoicesMainGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * Path part for operation apiInvoicesDetailsGet
   */
  static readonly ApiInvoicesDetailsGetPath = '/api/Invoices/details';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesDetailsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesDetailsGet$Plain$Response(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InvoiceDetailsDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesDetailsGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberInvoice', params.numberInvoice, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InvoiceDetailsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesDetailsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesDetailsGet$Plain(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<InvoiceDetailsDto> {

    return this.apiInvoicesDetailsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<InvoiceDetailsDto>) => r.body as InvoiceDetailsDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesDetailsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesDetailsGet$Json$Response(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InvoiceDetailsDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesDetailsGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberInvoice', params.numberInvoice, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InvoiceDetailsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesDetailsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesDetailsGet$Json(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<InvoiceDetailsDto> {

    return this.apiInvoicesDetailsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<InvoiceDetailsDto>) => r.body as InvoiceDetailsDto)
    );
  }

  /**
   * Path part for operation apiInvoicesMainDetailsGet
   */
  static readonly ApiInvoicesMainDetailsGetPath = '/api/Invoices/main/details';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesMainDetailsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainDetailsGet$Plain$Response(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InvoiceDetailsDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesMainDetailsGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberInvoice', params.numberInvoice, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InvoiceDetailsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesMainDetailsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainDetailsGet$Plain(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<InvoiceDetailsDto> {

    return this.apiInvoicesMainDetailsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<InvoiceDetailsDto>) => r.body as InvoiceDetailsDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesMainDetailsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainDetailsGet$Json$Response(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InvoiceDetailsDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesMainDetailsGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberInvoice', params.numberInvoice, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InvoiceDetailsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesMainDetailsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainDetailsGet$Json(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<InvoiceDetailsDto> {

    return this.apiInvoicesMainDetailsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<InvoiceDetailsDto>) => r.body as InvoiceDetailsDto)
    );
  }

  /**
   * Path part for operation apiInvoicesNotecreditapplyGet
   */
  static readonly ApiInvoicesNotecreditapplyGetPath = '/api/Invoices/notecreditapply';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesNotecreditapplyGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesNotecreditapplyGet$Plain$Response(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesNotecreditapplyGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberInvoice', params.numberInvoice, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesNotecreditapplyGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesNotecreditapplyGet$Plain(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesNotecreditapplyGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesNotecreditapplyGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesNotecreditapplyGet$Json$Response(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesNotecreditapplyGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberInvoice', params.numberInvoice, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesNotecreditapplyGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesNotecreditapplyGet$Json(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesNotecreditapplyGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * Path part for operation apiInvoicesCreditNoteGet
   */
  static readonly ApiInvoicesCreditNoteGetPath = '/api/Invoices/credit_note';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesCreditNoteGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesCreditNoteGet$Plain$Response(params?: {
    ip?: string;
    creditNoteNumber?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesCreditNoteGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('creditNoteNumber', params.creditNoteNumber, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesCreditNoteGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesCreditNoteGet$Plain(params?: {
    ip?: string;
    creditNoteNumber?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesCreditNoteGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesCreditNoteGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesCreditNoteGet$Json$Response(params?: {
    ip?: string;
    creditNoteNumber?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesCreditNoteGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('creditNoteNumber', params.creditNoteNumber, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesCreditNoteGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesCreditNoteGet$Json(params?: {
    ip?: string;
    creditNoteNumber?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesCreditNoteGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * Path part for operation apiInvoicesCreditNoteMainGet
   */
  static readonly ApiInvoicesCreditNoteMainGetPath = '/api/Invoices/credit_note/main';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesCreditNoteMainGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesCreditNoteMainGet$Plain$Response(params?: {
    ip?: string;
    creditNoteNumber?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesCreditNoteMainGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('creditNoteNumber', params.creditNoteNumber, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesCreditNoteMainGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesCreditNoteMainGet$Plain(params?: {
    ip?: string;
    creditNoteNumber?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesCreditNoteMainGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesCreditNoteMainGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesCreditNoteMainGet$Json$Response(params?: {
    ip?: string;
    creditNoteNumber?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesCreditNoteMainGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('creditNoteNumber', params.creditNoteNumber, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseInvoiceDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesCreditNoteMainGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesCreditNoteMainGet$Json(params?: {
    ip?: string;
    creditNoteNumber?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesCreditNoteMainGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

}
