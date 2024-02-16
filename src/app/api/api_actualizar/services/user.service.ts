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

import { ResponseIpPosMobile } from '../models/response-ip-pos-mobile';
import { ResponseMessage } from '../models/response-message';
import { ResponseUsers } from '../models/response-users';
import { UpdateUserDto } from '../models/update-user-dto';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUserIdentificationNumberGet
   */
  static readonly ApiUserIdentificationNumberGetPath = '/api/User/identification_number';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserIdentificationNumberGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdentificationNumberGet$Plain$Response(params?: {
    ip?: string;
    identificationNumber?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseUsers>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserIdentificationNumberGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('identificationNumber', params.identificationNumber, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseUsers>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserIdentificationNumberGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdentificationNumberGet$Plain(params?: {
    ip?: string;
    identificationNumber?: string;
  },
  context?: HttpContext

): Observable<ResponseUsers> {

    return this.apiUserIdentificationNumberGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseUsers>) => r.body as ResponseUsers)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserIdentificationNumberGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdentificationNumberGet$Json$Response(params?: {
    ip?: string;
    identificationNumber?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseUsers>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserIdentificationNumberGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('identificationNumber', params.identificationNumber, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseUsers>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserIdentificationNumberGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdentificationNumberGet$Json(params?: {
    ip?: string;
    identificationNumber?: string;
  },
  context?: HttpContext

): Observable<ResponseUsers> {

    return this.apiUserIdentificationNumberGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseUsers>) => r.body as ResponseUsers)
    );
  }

  /**
   * Path part for operation apiUserMainIdentificationNumberGet
   */
  static readonly ApiUserMainIdentificationNumberGetPath = '/api/User/main/identification_number';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMainIdentificationNumberGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMainIdentificationNumberGet$Plain$Response(params?: {
    ip?: string;
    identificationNumber?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseUsers>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMainIdentificationNumberGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('identificationNumber', params.identificationNumber, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseUsers>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserMainIdentificationNumberGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMainIdentificationNumberGet$Plain(params?: {
    ip?: string;
    identificationNumber?: string;
  },
  context?: HttpContext

): Observable<ResponseUsers> {

    return this.apiUserMainIdentificationNumberGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseUsers>) => r.body as ResponseUsers)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMainIdentificationNumberGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMainIdentificationNumberGet$Json$Response(params?: {
    ip?: string;
    identificationNumber?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseUsers>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMainIdentificationNumberGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('identificationNumber', params.identificationNumber, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseUsers>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserMainIdentificationNumberGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMainIdentificationNumberGet$Json(params?: {
    ip?: string;
    identificationNumber?: string;
  },
  context?: HttpContext

): Observable<ResponseUsers> {

    return this.apiUserMainIdentificationNumberGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseUsers>) => r.body as ResponseUsers)
    );
  }

  /**
   * Path part for operation apiUserUsernameGet
   */
  static readonly ApiUserUsernameGetPath = '/api/User/username';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUsernameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUsernameGet$Plain$Response(params?: {
    ip?: string;
    username?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseUsers>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUsernameGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseUsers>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUsernameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUsernameGet$Plain(params?: {
    ip?: string;
    username?: string;
  },
  context?: HttpContext

): Observable<ResponseUsers> {

    return this.apiUserUsernameGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseUsers>) => r.body as ResponseUsers)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUsernameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUsernameGet$Json$Response(params?: {
    ip?: string;
    username?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseUsers>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUsernameGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseUsers>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUsernameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUsernameGet$Json(params?: {
    ip?: string;
    username?: string;
  },
  context?: HttpContext

): Observable<ResponseUsers> {

    return this.apiUserUsernameGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseUsers>) => r.body as ResponseUsers)
    );
  }

  /**
   * Path part for operation apiUserMainUsernameGet
   */
  static readonly ApiUserMainUsernameGetPath = '/api/User/main/username';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMainUsernameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMainUsernameGet$Plain$Response(params?: {
    ip?: string;
    username?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseUsers>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMainUsernameGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseUsers>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserMainUsernameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMainUsernameGet$Plain(params?: {
    ip?: string;
    username?: string;
  },
  context?: HttpContext

): Observable<ResponseUsers> {

    return this.apiUserMainUsernameGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseUsers>) => r.body as ResponseUsers)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMainUsernameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMainUsernameGet$Json$Response(params?: {
    ip?: string;
    username?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseUsers>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMainUsernameGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseUsers>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserMainUsernameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMainUsernameGet$Json(params?: {
    ip?: string;
    username?: string;
  },
  context?: HttpContext

): Observable<ResponseUsers> {

    return this.apiUserMainUsernameGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseUsers>) => r.body as ResponseUsers)
    );
  }

  /**
   * Path part for operation apiUserAllUsersGet
   */
  static readonly ApiUserAllUsersGetPath = '/api/User/all_users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAllUsersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAllUsersGet$Plain$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseUsers>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserAllUsersGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseUsers>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAllUsersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAllUsersGet$Plain(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseUsers> {

    return this.apiUserAllUsersGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseUsers>) => r.body as ResponseUsers)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAllUsersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAllUsersGet$Json$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseUsers>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserAllUsersGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseUsers>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAllUsersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAllUsersGet$Json(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseUsers> {

    return this.apiUserAllUsersGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseUsers>) => r.body as ResponseUsers)
    );
  }

  /**
   * Path part for operation apiUserIpPosmobileGet
   */
  static readonly ApiUserIpPosmobileGetPath = '/api/User/ip_posmobile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserIpPosmobileGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIpPosmobileGet$Plain$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseIpPosMobile>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserIpPosmobileGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseIpPosMobile>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserIpPosmobileGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIpPosmobileGet$Plain(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseIpPosMobile> {

    return this.apiUserIpPosmobileGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseIpPosMobile>) => r.body as ResponseIpPosMobile)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserIpPosmobileGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIpPosmobileGet$Json$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseIpPosMobile>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserIpPosmobileGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseIpPosMobile>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserIpPosmobileGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIpPosmobileGet$Json(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseIpPosMobile> {

    return this.apiUserIpPosmobileGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseIpPosMobile>) => r.body as ResponseIpPosMobile)
    );
  }

  /**
   * Path part for operation apiUserPut
   */
  static readonly ApiUserPutPath = '/api/User';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPut$Plain$Response(params?: {
    company?: string;
    body?: UpdateUserDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMessage>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPutPath, 'put');
    if (params) {
      rb.query('company', params.company, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMessage>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPut$Plain(params?: {
    company?: string;
    body?: UpdateUserDto
  },
  context?: HttpContext

): Observable<ResponseMessage> {

    return this.apiUserPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMessage>) => r.body as ResponseMessage)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPut$Json$Response(params?: {
    company?: string;
    body?: UpdateUserDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMessage>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPutPath, 'put');
    if (params) {
      rb.query('company', params.company, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMessage>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPut$Json(params?: {
    company?: string;
    body?: UpdateUserDto
  },
  context?: HttpContext

): Observable<ResponseMessage> {

    return this.apiUserPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMessage>) => r.body as ResponseMessage)
    );
  }

}
