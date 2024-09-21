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

import { ResponseDatabaseSize } from '../models/response-database-size';
import { ResponseFilesEcomm } from '../models/response-files-ecomm';
import { ResponsePayFrom } from '../models/response-pay-from';

@Injectable({
  providedIn: 'root',
})
export class DashboardService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDashboardDatabaseSizesGet
   */
  static readonly ApiDashboardDatabaseSizesGetPath = '/api/Dashboard/database/sizes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardDatabaseSizesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardDatabaseSizesGet$Plain$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDatabaseSize>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardService.ApiDashboardDatabaseSizesGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseDatabaseSize>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardDatabaseSizesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardDatabaseSizesGet$Plain(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponseDatabaseSize> {

    return this.apiDashboardDatabaseSizesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDatabaseSize>) => r.body as ResponseDatabaseSize)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardDatabaseSizesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardDatabaseSizesGet$Json$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDatabaseSize>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardService.ApiDashboardDatabaseSizesGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseDatabaseSize>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardDatabaseSizesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardDatabaseSizesGet$Json(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponseDatabaseSize> {

    return this.apiDashboardDatabaseSizesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDatabaseSize>) => r.body as ResponseDatabaseSize)
    );
  }

  /**
   * Path part for operation apiDashboardEcommerceFilesGet
   */
  static readonly ApiDashboardEcommerceFilesGetPath = '/api/Dashboard/ecommerce/files';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardEcommerceFilesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardEcommerceFilesGet$Plain$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseFilesEcomm>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardService.ApiDashboardEcommerceFilesGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseFilesEcomm>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardEcommerceFilesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardEcommerceFilesGet$Plain(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseFilesEcomm> {

    return this.apiDashboardEcommerceFilesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseFilesEcomm>) => r.body as ResponseFilesEcomm)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardEcommerceFilesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardEcommerceFilesGet$Json$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseFilesEcomm>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardService.ApiDashboardEcommerceFilesGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseFilesEcomm>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardEcommerceFilesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardEcommerceFilesGet$Json(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseFilesEcomm> {

    return this.apiDashboardEcommerceFilesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseFilesEcomm>) => r.body as ResponseFilesEcomm)
    );
  }

  /**
   * Path part for operation apiDashboardInterfacesPayFromsGet
   */
  static readonly ApiDashboardInterfacesPayFromsGetPath = '/api/Dashboard/interfaces/payFroms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardInterfacesPayFromsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardInterfacesPayFromsGet$Plain$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponsePayFrom>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardService.ApiDashboardInterfacesPayFromsGetPath, 'get');
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
        return r as StrictHttpResponse<ResponsePayFrom>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardInterfacesPayFromsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardInterfacesPayFromsGet$Plain(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponsePayFrom> {

    return this.apiDashboardInterfacesPayFromsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponsePayFrom>) => r.body as ResponsePayFrom)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardInterfacesPayFromsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardInterfacesPayFromsGet$Json$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponsePayFrom>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardService.ApiDashboardInterfacesPayFromsGetPath, 'get');
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
        return r as StrictHttpResponse<ResponsePayFrom>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardInterfacesPayFromsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardInterfacesPayFromsGet$Json(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponsePayFrom> {

    return this.apiDashboardInterfacesPayFromsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponsePayFrom>) => r.body as ResponsePayFrom)
    );
  }

  /**
   * Path part for operation apiDashboardInterfacesMainPayFromGet
   */
  static readonly ApiDashboardInterfacesMainPayFromGetPath = '/api/Dashboard/interfaces/main/payFrom';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardInterfacesMainPayFromGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardInterfacesMainPayFromGet$Plain$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponsePayFrom>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardService.ApiDashboardInterfacesMainPayFromGetPath, 'get');
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
        return r as StrictHttpResponse<ResponsePayFrom>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardInterfacesMainPayFromGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardInterfacesMainPayFromGet$Plain(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponsePayFrom> {

    return this.apiDashboardInterfacesMainPayFromGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponsePayFrom>) => r.body as ResponsePayFrom)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardInterfacesMainPayFromGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardInterfacesMainPayFromGet$Json$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponsePayFrom>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardService.ApiDashboardInterfacesMainPayFromGetPath, 'get');
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
        return r as StrictHttpResponse<ResponsePayFrom>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardInterfacesMainPayFromGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardInterfacesMainPayFromGet$Json(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponsePayFrom> {

    return this.apiDashboardInterfacesMainPayFromGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponsePayFrom>) => r.body as ResponsePayFrom)
    );
  }

}
