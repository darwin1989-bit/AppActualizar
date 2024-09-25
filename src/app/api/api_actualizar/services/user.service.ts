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

import { AuthorizingUserDto } from '../models/authorizing-user-dto';
import { RegisteredUserDto } from '../models/registered-user-dto';
import { ResponseAuthorizerNcDto } from '../models/response-authorizer-nc-dto';
import { ResponseAuthorizingUser } from '../models/response-authorizing-user';
import { ResponseIpPosMobile } from '../models/response-ip-pos-mobile';
import { ResponseMessage } from '../models/response-message';
import { ResponseRegisteredUserDto } from '../models/response-registered-user-dto';
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
    ip?: string;
    body?: UpdateUserDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMessage>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPutPath, 'put');
    if (params) {
      rb.query('ip', params.ip, {});
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
    ip?: string;
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
    ip?: string;
    body?: UpdateUserDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMessage>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPutPath, 'put');
    if (params) {
      rb.query('ip', params.ip, {});
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
    ip?: string;
    body?: UpdateUserDto
  },
  context?: HttpContext

): Observable<ResponseMessage> {

    return this.apiUserPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMessage>) => r.body as ResponseMessage)
    );
  }

  /**
   * Path part for operation apiUserMainPut
   */
  static readonly ApiUserMainPutPath = '/api/User/main';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMainPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserMainPut$Plain$Response(params?: {
    company?: string;
    body?: UpdateUserDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMessage>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMainPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiUserMainPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserMainPut$Plain(params?: {
    company?: string;
    body?: UpdateUserDto
  },
  context?: HttpContext

): Observable<ResponseMessage> {

    return this.apiUserMainPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMessage>) => r.body as ResponseMessage)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMainPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserMainPut$Json$Response(params?: {
    company?: string;
    body?: UpdateUserDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMessage>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMainPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiUserMainPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserMainPut$Json(params?: {
    company?: string;
    body?: UpdateUserDto
  },
  context?: HttpContext

): Observable<ResponseMessage> {

    return this.apiUserMainPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMessage>) => r.body as ResponseMessage)
    );
  }

  /**
   * Path part for operation apiUserAuthorizingUserGet
   */
  static readonly ApiUserAuthorizingUserGetPath = '/api/User/authorizing_user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAuthorizingUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAuthorizingUserGet$Plain$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAuthorizingUser>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserAuthorizingUserGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseAuthorizingUser>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAuthorizingUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAuthorizingUserGet$Plain(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseAuthorizingUser> {

    return this.apiUserAuthorizingUserGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAuthorizingUser>) => r.body as ResponseAuthorizingUser)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAuthorizingUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAuthorizingUserGet$Json$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAuthorizingUser>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserAuthorizingUserGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseAuthorizingUser>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAuthorizingUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAuthorizingUserGet$Json(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseAuthorizingUser> {

    return this.apiUserAuthorizingUserGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAuthorizingUser>) => r.body as ResponseAuthorizingUser)
    );
  }

  /**
   * Path part for operation apiUserUpdateDayPut
   */
  static readonly ApiUserUpdateDayPutPath = '/api/User/update_day';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateDayPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateDayPut$Plain$Response(params?: {
    ip?: string;
    body?: AuthorizingUserDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMessage>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUpdateDayPutPath, 'put');
    if (params) {
      rb.query('ip', params.ip, {});
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
   * To access the full response (for headers, for example), `apiUserUpdateDayPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateDayPut$Plain(params?: {
    ip?: string;
    body?: AuthorizingUserDto
  },
  context?: HttpContext

): Observable<ResponseMessage> {

    return this.apiUserUpdateDayPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMessage>) => r.body as ResponseMessage)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateDayPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateDayPut$Json$Response(params?: {
    ip?: string;
    body?: AuthorizingUserDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMessage>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUpdateDayPutPath, 'put');
    if (params) {
      rb.query('ip', params.ip, {});
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
   * To access the full response (for headers, for example), `apiUserUpdateDayPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateDayPut$Json(params?: {
    ip?: string;
    body?: AuthorizingUserDto
  },
  context?: HttpContext

): Observable<ResponseMessage> {

    return this.apiUserUpdateDayPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMessage>) => r.body as ResponseMessage)
    );
  }

  /**
   * Path part for operation apiUserRegisteredUserGet
   */
  static readonly ApiUserRegisteredUserGetPath = '/api/User/registered_user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRegisteredUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRegisteredUserGet$Plain$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseRegisteredUserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserRegisteredUserGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseRegisteredUserDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRegisteredUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRegisteredUserGet$Plain(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseRegisteredUserDto> {

    return this.apiUserRegisteredUserGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseRegisteredUserDto>) => r.body as ResponseRegisteredUserDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRegisteredUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRegisteredUserGet$Json$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseRegisteredUserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserRegisteredUserGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseRegisteredUserDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRegisteredUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRegisteredUserGet$Json(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseRegisteredUserDto> {

    return this.apiUserRegisteredUserGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseRegisteredUserDto>) => r.body as ResponseRegisteredUserDto)
    );
  }

  /**
   * Path part for operation apiUserUpdateRegisteredUserPut
   */
  static readonly ApiUserUpdateRegisteredUserPutPath = '/api/User/update_registered_user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateRegisteredUserPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateRegisteredUserPut$Plain$Response(params?: {
    ip?: string;
    body?: RegisteredUserDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMessage>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUpdateRegisteredUserPutPath, 'put');
    if (params) {
      rb.query('ip', params.ip, {});
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
   * To access the full response (for headers, for example), `apiUserUpdateRegisteredUserPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateRegisteredUserPut$Plain(params?: {
    ip?: string;
    body?: RegisteredUserDto
  },
  context?: HttpContext

): Observable<ResponseMessage> {

    return this.apiUserUpdateRegisteredUserPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMessage>) => r.body as ResponseMessage)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateRegisteredUserPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateRegisteredUserPut$Json$Response(params?: {
    ip?: string;
    body?: RegisteredUserDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMessage>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUpdateRegisteredUserPutPath, 'put');
    if (params) {
      rb.query('ip', params.ip, {});
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
   * To access the full response (for headers, for example), `apiUserUpdateRegisteredUserPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateRegisteredUserPut$Json(params?: {
    ip?: string;
    body?: RegisteredUserDto
  },
  context?: HttpContext

): Observable<ResponseMessage> {

    return this.apiUserUpdateRegisteredUserPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMessage>) => r.body as ResponseMessage)
    );
  }

  /**
   * Path part for operation apiUserMainRegisteredUserGet
   */
  static readonly ApiUserMainRegisteredUserGetPath = '/api/User/main/registered_user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMainRegisteredUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMainRegisteredUserGet$Plain$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseRegisteredUserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMainRegisteredUserGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseRegisteredUserDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserMainRegisteredUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMainRegisteredUserGet$Plain(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponseRegisteredUserDto> {

    return this.apiUserMainRegisteredUserGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseRegisteredUserDto>) => r.body as ResponseRegisteredUserDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMainRegisteredUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMainRegisteredUserGet$Json$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseRegisteredUserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMainRegisteredUserGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseRegisteredUserDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserMainRegisteredUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMainRegisteredUserGet$Json(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponseRegisteredUserDto> {

    return this.apiUserMainRegisteredUserGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseRegisteredUserDto>) => r.body as ResponseRegisteredUserDto)
    );
  }

  /**
   * Path part for operation apiUserMainUpdateRegisteredUserPut
   */
  static readonly ApiUserMainUpdateRegisteredUserPutPath = '/api/User/main/update_registered_user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMainUpdateRegisteredUserPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserMainUpdateRegisteredUserPut$Plain$Response(params?: {
    company?: string;
    body?: RegisteredUserDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMessage>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMainUpdateRegisteredUserPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiUserMainUpdateRegisteredUserPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserMainUpdateRegisteredUserPut$Plain(params?: {
    company?: string;
    body?: RegisteredUserDto
  },
  context?: HttpContext

): Observable<ResponseMessage> {

    return this.apiUserMainUpdateRegisteredUserPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMessage>) => r.body as ResponseMessage)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMainUpdateRegisteredUserPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserMainUpdateRegisteredUserPut$Json$Response(params?: {
    company?: string;
    body?: RegisteredUserDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMessage>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMainUpdateRegisteredUserPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiUserMainUpdateRegisteredUserPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserMainUpdateRegisteredUserPut$Json(params?: {
    company?: string;
    body?: RegisteredUserDto
  },
  context?: HttpContext

): Observable<ResponseMessage> {

    return this.apiUserMainUpdateRegisteredUserPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMessage>) => r.body as ResponseMessage)
    );
  }

  /**
   * Path part for operation apiUserAuthorizerNcGet
   */
  static readonly ApiUserAuthorizerNcGetPath = '/api/User/authorizerNc';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAuthorizerNcGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAuthorizerNcGet$Plain$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAuthorizerNcDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserAuthorizerNcGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseAuthorizerNcDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAuthorizerNcGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAuthorizerNcGet$Plain(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseAuthorizerNcDto> {

    return this.apiUserAuthorizerNcGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAuthorizerNcDto>) => r.body as ResponseAuthorizerNcDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAuthorizerNcGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAuthorizerNcGet$Json$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAuthorizerNcDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserAuthorizerNcGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseAuthorizerNcDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAuthorizerNcGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAuthorizerNcGet$Json(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseAuthorizerNcDto> {

    return this.apiUserAuthorizerNcGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAuthorizerNcDto>) => r.body as ResponseAuthorizerNcDto)
    );
  }

  /**
   * Path part for operation apiUserAuthorizerNcPut
   */
  static readonly ApiUserAuthorizerNcPutPath = '/api/User/authorizerNc';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAuthorizerNcPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAuthorizerNcPut$Plain$Response(params?: {
    ip?: string;
    description?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAuthorizerNcDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserAuthorizerNcPutPath, 'put');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('description', params.description, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseAuthorizerNcDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAuthorizerNcPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAuthorizerNcPut$Plain(params?: {
    ip?: string;
    description?: string;
  },
  context?: HttpContext

): Observable<ResponseAuthorizerNcDto> {

    return this.apiUserAuthorizerNcPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAuthorizerNcDto>) => r.body as ResponseAuthorizerNcDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAuthorizerNcPut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAuthorizerNcPut$Json$Response(params?: {
    ip?: string;
    description?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAuthorizerNcDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserAuthorizerNcPutPath, 'put');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('description', params.description, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseAuthorizerNcDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAuthorizerNcPut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAuthorizerNcPut$Json(params?: {
    ip?: string;
    description?: string;
  },
  context?: HttpContext

): Observable<ResponseAuthorizerNcDto> {

    return this.apiUserAuthorizerNcPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAuthorizerNcDto>) => r.body as ResponseAuthorizerNcDto)
    );
  }

  /**
   * Path part for operation apiUserPasswordPut
   */
  static readonly ApiUserPasswordPutPath = '/api/User/password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPasswordPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserPasswordPut$Plain$Response(params?: {
    ip?: string;
    password?: string;
    user?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAuthorizerNcDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPasswordPutPath, 'put');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('password', params.password, {});
      rb.query('user', params.user, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseAuthorizerNcDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserPasswordPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserPasswordPut$Plain(params?: {
    ip?: string;
    password?: string;
    user?: string;
  },
  context?: HttpContext

): Observable<ResponseAuthorizerNcDto> {

    return this.apiUserPasswordPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAuthorizerNcDto>) => r.body as ResponseAuthorizerNcDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPasswordPut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserPasswordPut$Json$Response(params?: {
    ip?: string;
    password?: string;
    user?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAuthorizerNcDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPasswordPutPath, 'put');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('password', params.password, {});
      rb.query('user', params.user, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseAuthorizerNcDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserPasswordPut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserPasswordPut$Json(params?: {
    ip?: string;
    password?: string;
    user?: string;
  },
  context?: HttpContext

): Observable<ResponseAuthorizerNcDto> {

    return this.apiUserPasswordPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAuthorizerNcDto>) => r.body as ResponseAuthorizerNcDto)
    );
  }

  /**
   * Path part for operation apiUserMainPasswordPut
   */
  static readonly ApiUserMainPasswordPutPath = '/api/User/main/password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMainPasswordPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMainPasswordPut$Plain$Response(params?: {
    company?: string;
    password?: string;
    user?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAuthorizerNcDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMainPasswordPutPath, 'put');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('password', params.password, {});
      rb.query('user', params.user, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseAuthorizerNcDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserMainPasswordPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMainPasswordPut$Plain(params?: {
    company?: string;
    password?: string;
    user?: string;
  },
  context?: HttpContext

): Observable<ResponseAuthorizerNcDto> {

    return this.apiUserMainPasswordPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAuthorizerNcDto>) => r.body as ResponseAuthorizerNcDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMainPasswordPut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMainPasswordPut$Json$Response(params?: {
    company?: string;
    password?: string;
    user?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseAuthorizerNcDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMainPasswordPutPath, 'put');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('password', params.password, {});
      rb.query('user', params.user, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseAuthorizerNcDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserMainPasswordPut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMainPasswordPut$Json(params?: {
    company?: string;
    password?: string;
    user?: string;
  },
  context?: HttpContext

): Observable<ResponseAuthorizerNcDto> {

    return this.apiUserMainPasswordPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseAuthorizerNcDto>) => r.body as ResponseAuthorizerNcDto)
    );
  }

}
