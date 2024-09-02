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

import { MLogin } from '../models/m-login';
import { ResponseUser } from '../models/response-user';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiLoginAuthenticatePost
   */
  static readonly ApiLoginAuthenticatePostPath = '/api/Login/authenticate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLoginAuthenticatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLoginAuthenticatePost$Plain$Response(params?: {
    body?: MLogin
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseUser>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.ApiLoginAuthenticatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseUser>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLoginAuthenticatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLoginAuthenticatePost$Plain(params?: {
    body?: MLogin
  },
  context?: HttpContext

): Observable<ResponseUser> {

    return this.apiLoginAuthenticatePost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseUser>) => r.body as ResponseUser)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLoginAuthenticatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLoginAuthenticatePost$Json$Response(params?: {
    body?: MLogin
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseUser>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.ApiLoginAuthenticatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseUser>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLoginAuthenticatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLoginAuthenticatePost$Json(params?: {
    body?: MLogin
  },
  context?: HttpContext

): Observable<ResponseUser> {

    return this.apiLoginAuthenticatePost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseUser>) => r.body as ResponseUser)
    );
  }

  /**
   * Path part for operation apiLoginUpdateThemeIdPut
   */
  static readonly ApiLoginUpdateThemeIdPutPath = '/api/Login/update-theme/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLoginUpdateThemeIdPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginUpdateThemeIdPut$Response(params: {
    id: number;
    theme?: string;
    colorScheme?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.ApiLoginUpdateThemeIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('theme', params.theme, {});
      rb.query('colorScheme', params.colorScheme, {});
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
   * To access the full response (for headers, for example), `apiLoginUpdateThemeIdPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginUpdateThemeIdPut(params: {
    id: number;
    theme?: string;
    colorScheme?: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiLoginUpdateThemeIdPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
