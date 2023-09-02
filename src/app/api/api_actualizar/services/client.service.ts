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

import { ClientCreateParams } from '../models/client-create-params';
import { ClientParamsUpdate } from '../models/client-params-update';
import { GetCitiesDto } from '../models/get-cities-dto';
import { GetClientDto } from '../models/get-client-dto';
import { GetProvincesDto } from '../models/get-provinces-dto';
import { GetRetentionDto } from '../models/get-retention-dto';
import { RetentionParams } from '../models/retention-params';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiClientGet
   */
  static readonly ApiClientGetPath = '/api/Client';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientGet$Plain$Response(params?: {
    ip?: string;
    numberId?: string;
    typeIdClient?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.ApiClientGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
      rb.query('typeIdClient', params.typeIdClient, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetClientDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientGet$Plain(params?: {
    ip?: string;
    numberId?: string;
    typeIdClient?: string;
  },
  context?: HttpContext

): Observable<Array<GetClientDto>> {

    return this.apiClientGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetClientDto>>) => r.body as Array<GetClientDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientGet$Json$Response(params?: {
    ip?: string;
    numberId?: string;
    typeIdClient?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.ApiClientGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
      rb.query('typeIdClient', params.typeIdClient, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetClientDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientGet$Json(params?: {
    ip?: string;
    numberId?: string;
    typeIdClient?: string;
  },
  context?: HttpContext

): Observable<Array<GetClientDto>> {

    return this.apiClientGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetClientDto>>) => r.body as Array<GetClientDto>)
    );
  }

  /**
   * Path part for operation apiClientPut
   */
  static readonly ApiClientPutPath = '/api/Client';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientPut$Plain$Response(params?: {
    company?: string;
    ip?: string;
    numberId?: string;
    typeIdClient?: string;
    body?: ClientParamsUpdate
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.ApiClientPutPath, 'put');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
      rb.query('typeIdClient', params.typeIdClient, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetClientDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientPut$Plain(params?: {
    company?: string;
    ip?: string;
    numberId?: string;
    typeIdClient?: string;
    body?: ClientParamsUpdate
  },
  context?: HttpContext

): Observable<Array<GetClientDto>> {

    return this.apiClientPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetClientDto>>) => r.body as Array<GetClientDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientPut$Json$Response(params?: {
    company?: string;
    ip?: string;
    numberId?: string;
    typeIdClient?: string;
    body?: ClientParamsUpdate
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.ApiClientPutPath, 'put');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
      rb.query('typeIdClient', params.typeIdClient, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetClientDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientPut$Json(params?: {
    company?: string;
    ip?: string;
    numberId?: string;
    typeIdClient?: string;
    body?: ClientParamsUpdate
  },
  context?: HttpContext

): Observable<Array<GetClientDto>> {

    return this.apiClientPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetClientDto>>) => r.body as Array<GetClientDto>)
    );
  }

  /**
   * Path part for operation apiClientPost
   */
  static readonly ApiClientPostPath = '/api/Client';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientPost$Plain$Response(params?: {
    ip?: string;
    numberId?: string;
    typeIdClient?: string;
    body?: ClientCreateParams
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.ApiClientPostPath, 'post');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
      rb.query('typeIdClient', params.typeIdClient, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetClientDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientPost$Plain(params?: {
    ip?: string;
    numberId?: string;
    typeIdClient?: string;
    body?: ClientCreateParams
  },
  context?: HttpContext

): Observable<Array<GetClientDto>> {

    return this.apiClientPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetClientDto>>) => r.body as Array<GetClientDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientPost$Json$Response(params?: {
    ip?: string;
    numberId?: string;
    typeIdClient?: string;
    body?: ClientCreateParams
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.ApiClientPostPath, 'post');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
      rb.query('typeIdClient', params.typeIdClient, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetClientDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientPost$Json(params?: {
    ip?: string;
    numberId?: string;
    typeIdClient?: string;
    body?: ClientCreateParams
  },
  context?: HttpContext

): Observable<Array<GetClientDto>> {

    return this.apiClientPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetClientDto>>) => r.body as Array<GetClientDto>)
    );
  }

  /**
   * Path part for operation apiClientProvincesGet
   */
  static readonly ApiClientProvincesGetPath = '/api/Client/provinces';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientProvincesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientProvincesGet$Plain$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetProvincesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.ApiClientProvincesGetPath, 'get');
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
        return r as StrictHttpResponse<Array<GetProvincesDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientProvincesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientProvincesGet$Plain(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<Array<GetProvincesDto>> {

    return this.apiClientProvincesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetProvincesDto>>) => r.body as Array<GetProvincesDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientProvincesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientProvincesGet$Json$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetProvincesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.ApiClientProvincesGetPath, 'get');
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
        return r as StrictHttpResponse<Array<GetProvincesDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientProvincesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientProvincesGet$Json(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<Array<GetProvincesDto>> {

    return this.apiClientProvincesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetProvincesDto>>) => r.body as Array<GetProvincesDto>)
    );
  }

  /**
   * Path part for operation apiClientCitiesGet
   */
  static readonly ApiClientCitiesGetPath = '/api/Client/cities';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientCitiesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientCitiesGet$Plain$Response(params?: {
    ip?: string;
    province?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetCitiesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.ApiClientCitiesGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('province', params.province, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetCitiesDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientCitiesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientCitiesGet$Plain(params?: {
    ip?: string;
    province?: string;
  },
  context?: HttpContext

): Observable<Array<GetCitiesDto>> {

    return this.apiClientCitiesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetCitiesDto>>) => r.body as Array<GetCitiesDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientCitiesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientCitiesGet$Json$Response(params?: {
    ip?: string;
    province?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetCitiesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.ApiClientCitiesGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('province', params.province, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetCitiesDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientCitiesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientCitiesGet$Json(params?: {
    ip?: string;
    province?: string;
  },
  context?: HttpContext

): Observable<Array<GetCitiesDto>> {

    return this.apiClientCitiesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetCitiesDto>>) => r.body as Array<GetCitiesDto>)
    );
  }

  /**
   * Path part for operation apiClientRetentionGet
   */
  static readonly ApiClientRetentionGetPath = '/api/Client/retention';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientRetentionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientRetentionGet$Plain$Response(params?: {
    ip?: string;
    numberId?: string;
    typeIdClient?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetRetentionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.ApiClientRetentionGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
      rb.query('typeIdClient', params.typeIdClient, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetRetentionDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientRetentionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientRetentionGet$Plain(params?: {
    ip?: string;
    numberId?: string;
    typeIdClient?: string;
  },
  context?: HttpContext

): Observable<Array<GetRetentionDto>> {

    return this.apiClientRetentionGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetRetentionDto>>) => r.body as Array<GetRetentionDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientRetentionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientRetentionGet$Json$Response(params?: {
    ip?: string;
    numberId?: string;
    typeIdClient?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetRetentionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.ApiClientRetentionGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
      rb.query('typeIdClient', params.typeIdClient, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetRetentionDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientRetentionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientRetentionGet$Json(params?: {
    ip?: string;
    numberId?: string;
    typeIdClient?: string;
  },
  context?: HttpContext

): Observable<Array<GetRetentionDto>> {

    return this.apiClientRetentionGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetRetentionDto>>) => r.body as Array<GetRetentionDto>)
    );
  }

  /**
   * Path part for operation apiClientRetentionPut
   */
  static readonly ApiClientRetentionPutPath = '/api/Client/retention';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientRetentionPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientRetentionPut$Response(params?: {
    ip?: string;
    body?: RetentionParams
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.ApiClientRetentionPutPath, 'put');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientRetentionPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientRetentionPut(params?: {
    ip?: string;
    body?: RetentionParams
  },
  context?: HttpContext

): Observable<void> {

    return this.apiClientRetentionPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
