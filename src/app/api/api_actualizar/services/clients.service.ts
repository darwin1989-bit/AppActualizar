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
   * Path part for operation apiClientsGetclientGet
   */
  static readonly ApiClientsGetclientGetPath = '/api/Clients/getclient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientsGetclientGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsGetclientGet$Plain$Response(params?: {
    ip?: string;
    numberId?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, ClientsService.ApiClientsGetclientGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiClientsGetclientGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsGetclientGet$Plain(params?: {
    ip?: string;
    numberId?: string;
  },
  context?: HttpContext

): Observable<ClientDto> {

    return this.apiClientsGetclientGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ClientDto>) => r.body as ClientDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientsGetclientGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsGetclientGet$Json$Response(params?: {
    ip?: string;
    numberId?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, ClientsService.ApiClientsGetclientGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiClientsGetclientGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsGetclientGet$Json(params?: {
    ip?: string;
    numberId?: string;
  },
  context?: HttpContext

): Observable<ClientDto> {

    return this.apiClientsGetclientGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ClientDto>) => r.body as ClientDto)
    );
  }

  /**
   * Path part for operation apiClientsUpdateclientPut
   */
  static readonly ApiClientsUpdateclientPutPath = '/api/Clients/updateclient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientsUpdateclientPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientsUpdateclientPut$Response(params?: {
    company?: string;
    ip?: string;
    numberId?: string;
    body?: ClientUpdateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientsService.ApiClientsUpdateclientPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiClientsUpdateclientPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientsUpdateclientPut(params?: {
    company?: string;
    ip?: string;
    numberId?: string;
    body?: ClientUpdateDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiClientsUpdateclientPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiClientsCreateClientPost
   */
  static readonly ApiClientsCreateClientPostPath = '/api/Clients/createClient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientsCreateClientPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientsCreateClientPost$Response(params?: {
    ip?: string;
    numberId?: string;
    body?: ClientCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientsService.ApiClientsCreateClientPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiClientsCreateClientPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientsCreateClientPost(params?: {
    ip?: string;
    numberId?: string;
    body?: ClientCreateDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiClientsCreateClientPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiClientsGetprovincesGet
   */
  static readonly ApiClientsGetprovincesGetPath = '/api/Clients/getprovinces';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientsGetprovincesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsGetprovincesGet$Plain$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<TblProvincia>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientsService.ApiClientsGetprovincesGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiClientsGetprovincesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsGetprovincesGet$Plain(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<Array<TblProvincia>> {

    return this.apiClientsGetprovincesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<TblProvincia>>) => r.body as Array<TblProvincia>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientsGetprovincesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsGetprovincesGet$Json$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<TblProvincia>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientsService.ApiClientsGetprovincesGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiClientsGetprovincesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsGetprovincesGet$Json(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<Array<TblProvincia>> {

    return this.apiClientsGetprovincesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<TblProvincia>>) => r.body as Array<TblProvincia>)
    );
  }

  /**
   * Path part for operation apiClientsGetcitysGet
   */
  static readonly ApiClientsGetcitysGetPath = '/api/Clients/getcitys';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientsGetcitysGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsGetcitysGet$Plain$Response(params?: {
    ip?: string;
    province?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TblCiudad>> {

    const rb = new RequestBuilder(this.rootUrl, ClientsService.ApiClientsGetcitysGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiClientsGetcitysGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsGetcitysGet$Plain(params?: {
    ip?: string;
    province?: string;
  },
  context?: HttpContext

): Observable<TblCiudad> {

    return this.apiClientsGetcitysGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TblCiudad>) => r.body as TblCiudad)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientsGetcitysGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsGetcitysGet$Json$Response(params?: {
    ip?: string;
    province?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TblCiudad>> {

    const rb = new RequestBuilder(this.rootUrl, ClientsService.ApiClientsGetcitysGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiClientsGetcitysGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClientsGetcitysGet$Json(params?: {
    ip?: string;
    province?: string;
  },
  context?: HttpContext

): Observable<TblCiudad> {

    return this.apiClientsGetcitysGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TblCiudad>) => r.body as TblCiudad)
    );
  }

}
