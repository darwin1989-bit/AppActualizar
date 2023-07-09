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

import { ClientCreateDto } from '../models/client-create-dto';
import { ClientDto } from '../models/client-dto';
import { ClientUpdateDto } from '../models/client-update-dto';
import { TblCiudad } from '../models/tbl-ciudad';
import { TblProvincia } from '../models/tbl-provincia';

@Injectable({
  providedIn: 'root',
})
export class ClientsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiClientsClientGet
   */
  static readonly ApiClientsClientGetPath = '/api/Clients/client';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientsClientGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsClientGet$Plain$Response(params?: {
    ip?: string;
    numberId?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, ClientsService.ApiClientsClientGetPath, 'get');
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
        return r as StrictHttpResponse<ClientDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientsClientGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsClientGet$Plain(params?: {
    ip?: string;
    numberId?: string;
  },
  context?: HttpContext

): Observable<ClientDto> {

    return this.apiClientsClientGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ClientDto>) => r.body as ClientDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientsClientGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsClientGet$Json$Response(params?: {
    ip?: string;
    numberId?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, ClientsService.ApiClientsClientGetPath, 'get');
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
        return r as StrictHttpResponse<ClientDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientsClientGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsClientGet$Json(params?: {
    ip?: string;
    numberId?: string;
  },
  context?: HttpContext

): Observable<ClientDto> {

    return this.apiClientsClientGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ClientDto>) => r.body as ClientDto)
    );
  }

  /**
   * Path part for operation apiClientsClientPut
   */
  static readonly ApiClientsClientPutPath = '/api/Clients/client';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientsClientPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientsClientPut$Response(params?: {
    company?: string;
    ip?: string;
    numberId?: string;
    body?: ClientUpdateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientsService.ApiClientsClientPutPath, 'put');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
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
   * To access the full response (for headers, for example), `apiClientsClientPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientsClientPut(params?: {
    company?: string;
    ip?: string;
    numberId?: string;
    body?: ClientUpdateDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiClientsClientPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiClientsClientPost
   */
  static readonly ApiClientsClientPostPath = '/api/Clients/client';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientsClientPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientsClientPost$Response(params?: {
    ip?: string;
    numberId?: string;
    body?: ClientCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientsService.ApiClientsClientPostPath, 'post');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('numberId', params.numberId, {});
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
   * To access the full response (for headers, for example), `apiClientsClientPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientsClientPost(params?: {
    ip?: string;
    numberId?: string;
    body?: ClientCreateDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiClientsClientPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiClientsProvincesGet
   */
  static readonly ApiClientsProvincesGetPath = '/api/Clients/provinces';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientsProvincesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsProvincesGet$Plain$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<TblProvincia>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientsService.ApiClientsProvincesGetPath, 'get');
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
        return r as StrictHttpResponse<Array<TblProvincia>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientsProvincesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsProvincesGet$Plain(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<Array<TblProvincia>> {

    return this.apiClientsProvincesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<TblProvincia>>) => r.body as Array<TblProvincia>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientsProvincesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsProvincesGet$Json$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<TblProvincia>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientsService.ApiClientsProvincesGetPath, 'get');
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
        return r as StrictHttpResponse<Array<TblProvincia>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientsProvincesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsProvincesGet$Json(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<Array<TblProvincia>> {

    return this.apiClientsProvincesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<TblProvincia>>) => r.body as Array<TblProvincia>)
    );
  }

  /**
   * Path part for operation apiClientsCitysGet
   */
  static readonly ApiClientsCitysGetPath = '/api/Clients/citys';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientsCitysGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsCitysGet$Plain$Response(params?: {
    ip?: string;
    province?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TblCiudad>> {

    const rb = new RequestBuilder(this.rootUrl, ClientsService.ApiClientsCitysGetPath, 'get');
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
        return r as StrictHttpResponse<TblCiudad>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientsCitysGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsCitysGet$Plain(params?: {
    ip?: string;
    province?: string;
  },
  context?: HttpContext

): Observable<TblCiudad> {

    return this.apiClientsCitysGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TblCiudad>) => r.body as TblCiudad)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientsCitysGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsCitysGet$Json$Response(params?: {
    ip?: string;
    province?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TblCiudad>> {

    const rb = new RequestBuilder(this.rootUrl, ClientsService.ApiClientsCitysGetPath, 'get');
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
        return r as StrictHttpResponse<TblCiudad>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientsCitysGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsCitysGet$Json(params?: {
    ip?: string;
    province?: string;
  },
  context?: HttpContext

): Observable<TblCiudad> {

    return this.apiClientsCitysGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TblCiudad>) => r.body as TblCiudad)
    );
  }

}
