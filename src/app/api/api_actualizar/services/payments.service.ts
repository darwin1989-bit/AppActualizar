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

import { ResponseDto } from '../models/response-dto';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPaymentsGet
   */
  static readonly ApiPaymentsGetPath = '/api/Payments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPaymentsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPaymentsGet$Plain$Response(params?: {
    ip?: string;
    numberId?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentsService.ApiPaymentsGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPaymentsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPaymentsGet$Plain(params?: {
    ip?: string;
    numberId?: string;
  },
  context?: HttpContext

): Observable<ResponseDto> {

    return this.apiPaymentsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDto>) => r.body as ResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPaymentsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPaymentsGet$Json$Response(params?: {
    ip?: string;
    numberId?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentsService.ApiPaymentsGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPaymentsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPaymentsGet$Json(params?: {
    ip?: string;
    numberId?: string;
  },
  context?: HttpContext

): Observable<ResponseDto> {

    return this.apiPaymentsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDto>) => r.body as ResponseDto)
    );
  }

  /**
   * Path part for operation apiPaymentsAllPaymentsGet
   */
  static readonly ApiPaymentsAllPaymentsGetPath = '/api/Payments/all_payments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPaymentsAllPaymentsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPaymentsAllPaymentsGet$Plain$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentsService.ApiPaymentsAllPaymentsGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPaymentsAllPaymentsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPaymentsAllPaymentsGet$Plain(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseDto> {

    return this.apiPaymentsAllPaymentsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDto>) => r.body as ResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPaymentsAllPaymentsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPaymentsAllPaymentsGet$Json$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentsService.ApiPaymentsAllPaymentsGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPaymentsAllPaymentsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPaymentsAllPaymentsGet$Json(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseDto> {

    return this.apiPaymentsAllPaymentsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDto>) => r.body as ResponseDto)
    );
  }

}
