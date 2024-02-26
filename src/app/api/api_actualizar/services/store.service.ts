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

import { ResponseOpenBoxes } from '../models/response-open-boxes';

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
   * Path part for operation apiStoreGet
   */
  static readonly ApiStoreGetPath = '/api/Store';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGet$Plain$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseOpenBoxes>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiStoreGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGet$Plain(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponseOpenBoxes> {

    return this.apiStoreGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseOpenBoxes>) => r.body as ResponseOpenBoxes)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGet$Json$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseOpenBoxes>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiStoreGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGet$Json(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponseOpenBoxes> {

    return this.apiStoreGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseOpenBoxes>) => r.body as ResponseOpenBoxes)
    );
  }

}
