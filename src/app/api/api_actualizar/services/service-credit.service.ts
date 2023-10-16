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

import { ResClientCreditDto } from '../models/res-client-credit-dto';

@Injectable({
  providedIn: 'root',
})
export class ServiceCreditService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiServiceCreditGet
   */
  static readonly ApiServiceCreditGetPath = '/api/ServiceCredit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServiceCreditGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServiceCreditGet$Plain$Response(params?: {
    ip?: string;
    numberId?: string;
    codSap?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResClientCreditDto>> {

    const rb = new RequestBuilder(this.rootUrl, ServiceCreditService.ApiServiceCreditGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
      rb.query('codSap', params.codSap, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResClientCreditDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiServiceCreditGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServiceCreditGet$Plain(params?: {
    ip?: string;
    numberId?: string;
    codSap?: string;
  },
  context?: HttpContext

): Observable<ResClientCreditDto> {

    return this.apiServiceCreditGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResClientCreditDto>) => r.body as ResClientCreditDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServiceCreditGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServiceCreditGet$Json$Response(params?: {
    ip?: string;
    numberId?: string;
    codSap?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResClientCreditDto>> {

    const rb = new RequestBuilder(this.rootUrl, ServiceCreditService.ApiServiceCreditGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
      rb.query('codSap', params.codSap, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResClientCreditDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiServiceCreditGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServiceCreditGet$Json(params?: {
    ip?: string;
    numberId?: string;
    codSap?: string;
  },
  context?: HttpContext

): Observable<ResClientCreditDto> {

    return this.apiServiceCreditGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResClientCreditDto>) => r.body as ResClientCreditDto)
    );
  }

}
