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

import { OfficesDto } from '../models/offices-dto';

@Injectable({
  providedIn: 'root',
})
export class OfficesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiOfficesGet
   */
  static readonly ApiOfficesGetPath = '/api/Offices';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOfficesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOfficesGet$Plain$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<OfficesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OfficesService.ApiOfficesGetPath, 'get');
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
        return r as StrictHttpResponse<Array<OfficesDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOfficesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOfficesGet$Plain(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<Array<OfficesDto>> {

    return this.apiOfficesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<OfficesDto>>) => r.body as Array<OfficesDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOfficesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOfficesGet$Json$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<OfficesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OfficesService.ApiOfficesGetPath, 'get');
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
        return r as StrictHttpResponse<Array<OfficesDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOfficesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOfficesGet$Json(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<Array<OfficesDto>> {

    return this.apiOfficesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<OfficesDto>>) => r.body as Array<OfficesDto>)
    );
  }

}
