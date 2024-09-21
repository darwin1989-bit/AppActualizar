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
  static readonly ApiInvoicesAllInvoicesGetPath = '/api/Invoices/allInvoices';

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
   * Path part for operation apiInvoicesMainNumberGet
   */
  static readonly ApiInvoicesMainNumberGetPath = '/api/Invoices/main/number';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesMainNumberGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainNumberGet$Plain$Response(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesMainNumberGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiInvoicesMainNumberGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainNumberGet$Plain(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesMainNumberGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesMainNumberGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainNumberGet$Json$Response(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesMainNumberGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiInvoicesMainNumberGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainNumberGet$Json(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesMainNumberGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * Path part for operation apiInvoicesMainIdentificationGet
   */
  static readonly ApiInvoicesMainIdentificationGetPath = '/api/Invoices/main/identification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesMainIdentificationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainIdentificationGet$Plain$Response(params?: {
    ip?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesMainIdentificationGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiInvoicesMainIdentificationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainIdentificationGet$Plain(params?: {
    ip?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesMainIdentificationGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesMainIdentificationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainIdentificationGet$Json$Response(params?: {
    ip?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesMainIdentificationGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiInvoicesMainIdentificationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainIdentificationGet$Json(params?: {
    ip?: string;
    identification?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesMainIdentificationGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * Path part for operation apiInvoicesMainAllInvoicesGet
   */
  static readonly ApiInvoicesMainAllInvoicesGetPath = '/api/Invoices/main/allInvoices';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesMainAllInvoicesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainAllInvoicesGet$Plain$Response(params?: {
    ip?: string;
    office?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesMainAllInvoicesGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiInvoicesMainAllInvoicesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainAllInvoicesGet$Plain(params?: {
    ip?: string;
    office?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesMainAllInvoicesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesMainAllInvoicesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainAllInvoicesGet$Json$Response(params?: {
    ip?: string;
    office?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesMainAllInvoicesGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiInvoicesMainAllInvoicesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainAllInvoicesGet$Json(params?: {
    ip?: string;
    office?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesMainAllInvoicesGet$Json$Response(params,context).pipe(
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
   * Path part for operation apiInvoicesNoteCreditApplysGet
   */
  static readonly ApiInvoicesNoteCreditApplysGetPath = '/api/Invoices/noteCreditApplys';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesNoteCreditApplysGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesNoteCreditApplysGet$Plain$Response(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesNoteCreditApplysGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiInvoicesNoteCreditApplysGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesNoteCreditApplysGet$Plain(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesNoteCreditApplysGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesNoteCreditApplysGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesNoteCreditApplysGet$Json$Response(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesNoteCreditApplysGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiInvoicesNoteCreditApplysGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesNoteCreditApplysGet$Json(params?: {
    ip?: string;
    numberInvoice?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesNoteCreditApplysGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * Path part for operation apiInvoicesCreditNotesGet
   */
  static readonly ApiInvoicesCreditNotesGetPath = '/api/Invoices/creditNotes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesCreditNotesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesCreditNotesGet$Plain$Response(params?: {
    ip?: string;
    creditNoteNumber?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesCreditNotesGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiInvoicesCreditNotesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesCreditNotesGet$Plain(params?: {
    ip?: string;
    creditNoteNumber?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesCreditNotesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesCreditNotesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesCreditNotesGet$Json$Response(params?: {
    ip?: string;
    creditNoteNumber?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesCreditNotesGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiInvoicesCreditNotesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesCreditNotesGet$Json(params?: {
    ip?: string;
    creditNoteNumber?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesCreditNotesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * Path part for operation apiInvoicesMainCreditNotesGet
   */
  static readonly ApiInvoicesMainCreditNotesGetPath = '/api/Invoices/main/creditNotes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesMainCreditNotesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainCreditNotesGet$Plain$Response(params?: {
    ip?: string;
    creditNoteNumber?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesMainCreditNotesGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiInvoicesMainCreditNotesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainCreditNotesGet$Plain(params?: {
    ip?: string;
    creditNoteNumber?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesMainCreditNotesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesMainCreditNotesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainCreditNotesGet$Json$Response(params?: {
    ip?: string;
    creditNoteNumber?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseInvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesMainCreditNotesGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiInvoicesMainCreditNotesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesMainCreditNotesGet$Json(params?: {
    ip?: string;
    creditNoteNumber?: string;
  },
  context?: HttpContext

): Observable<ResponseInvoiceDto> {

    return this.apiInvoicesMainCreditNotesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseInvoiceDto>) => r.body as ResponseInvoiceDto)
    );
  }

}
