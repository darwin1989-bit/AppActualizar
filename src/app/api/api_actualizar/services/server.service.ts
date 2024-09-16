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

import { ResponseDataNameJobs } from '../models/response-data-name-jobs';
import { ResponseDatabaseNames } from '../models/response-database-names';
import { ResponseDatabaseSize } from '../models/response-database-size';
import { ResponseJobExecutionNameDto } from '../models/response-job-execution-name-dto';
import { ResponseJobsExecutions } from '../models/response-jobs-executions';
import { ResponseServerDateControl } from '../models/response-server-date-control';

@Injectable({
  providedIn: 'root',
})
export class ServerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiServerJobExecutionsJobsNamesGet
   */
  static readonly ApiServerJobExecutionsJobsNamesGetPath = '/api/Server/jobExecutions/jobsNames';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerJobExecutionsJobsNamesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobsNamesGet$Plain$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDataNameJobs>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerJobExecutionsJobsNamesGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseDataNameJobs>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiServerJobExecutionsJobsNamesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobsNamesGet$Plain(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseDataNameJobs> {

    return this.apiServerJobExecutionsJobsNamesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDataNameJobs>) => r.body as ResponseDataNameJobs)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerJobExecutionsJobsNamesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobsNamesGet$Json$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDataNameJobs>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerJobExecutionsJobsNamesGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseDataNameJobs>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiServerJobExecutionsJobsNamesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobsNamesGet$Json(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseDataNameJobs> {

    return this.apiServerJobExecutionsJobsNamesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDataNameJobs>) => r.body as ResponseDataNameJobs)
    );
  }

  /**
   * Path part for operation apiServerJobExecutionsJobExecutedStoreNameJobGet
   */
  static readonly ApiServerJobExecutionsJobExecutedStoreNameJobGetPath = '/api/Server/jobExecutions/jobExecuted/store/nameJob';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerJobExecutionsJobExecutedStoreNameJobGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedStoreNameJobGet$Plain$Response(params?: {
    ip?: string;
    nameJob?: string;
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseJobExecutionNameDto>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerJobExecutionsJobExecutedStoreNameJobGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('nameJob', params.nameJob, {});
      rb.query('startDate', params.startDate, {});
      rb.query('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseJobExecutionNameDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiServerJobExecutionsJobExecutedStoreNameJobGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedStoreNameJobGet$Plain(params?: {
    ip?: string;
    nameJob?: string;
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<ResponseJobExecutionNameDto> {

    return this.apiServerJobExecutionsJobExecutedStoreNameJobGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseJobExecutionNameDto>) => r.body as ResponseJobExecutionNameDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerJobExecutionsJobExecutedStoreNameJobGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedStoreNameJobGet$Json$Response(params?: {
    ip?: string;
    nameJob?: string;
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseJobExecutionNameDto>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerJobExecutionsJobExecutedStoreNameJobGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('nameJob', params.nameJob, {});
      rb.query('startDate', params.startDate, {});
      rb.query('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseJobExecutionNameDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiServerJobExecutionsJobExecutedStoreNameJobGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedStoreNameJobGet$Json(params?: {
    ip?: string;
    nameJob?: string;
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<ResponseJobExecutionNameDto> {

    return this.apiServerJobExecutionsJobExecutedStoreNameJobGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseJobExecutionNameDto>) => r.body as ResponseJobExecutionNameDto)
    );
  }

  /**
   * Path part for operation apiServerJobExecutionsJobExecutedStoreAllJobsGet
   */
  static readonly ApiServerJobExecutionsJobExecutedStoreAllJobsGetPath = '/api/Server/jobExecutions/jobExecuted/store/allJobs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerJobExecutionsJobExecutedStoreAllJobsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedStoreAllJobsGet$Plain$Response(params?: {
    ip?: string;
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseJobExecutionNameDto>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerJobExecutionsJobExecutedStoreAllJobsGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('startDate', params.startDate, {});
      rb.query('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseJobExecutionNameDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiServerJobExecutionsJobExecutedStoreAllJobsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedStoreAllJobsGet$Plain(params?: {
    ip?: string;
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<ResponseJobExecutionNameDto> {

    return this.apiServerJobExecutionsJobExecutedStoreAllJobsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseJobExecutionNameDto>) => r.body as ResponseJobExecutionNameDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerJobExecutionsJobExecutedStoreAllJobsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedStoreAllJobsGet$Json$Response(params?: {
    ip?: string;
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseJobExecutionNameDto>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerJobExecutionsJobExecutedStoreAllJobsGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('startDate', params.startDate, {});
      rb.query('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseJobExecutionNameDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiServerJobExecutionsJobExecutedStoreAllJobsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedStoreAllJobsGet$Json(params?: {
    ip?: string;
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<ResponseJobExecutionNameDto> {

    return this.apiServerJobExecutionsJobExecutedStoreAllJobsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseJobExecutionNameDto>) => r.body as ResponseJobExecutionNameDto)
    );
  }

  /**
   * Path part for operation apiServerJobExecutionsJobExecutedAllStoreGet
   */
  static readonly ApiServerJobExecutionsJobExecutedAllStoreGetPath = '/api/Server/jobExecutions/jobExecuted/allStore';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerJobExecutionsJobExecutedAllStoreGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedAllStoreGet$Plain$Response(params?: {
    company?: string;
    nameJob?: string;
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseJobsExecutions>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerJobExecutionsJobExecutedAllStoreGetPath, 'get');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('nameJob', params.nameJob, {});
      rb.query('startDate', params.startDate, {});
      rb.query('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseJobsExecutions>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiServerJobExecutionsJobExecutedAllStoreGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedAllStoreGet$Plain(params?: {
    company?: string;
    nameJob?: string;
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<ResponseJobsExecutions> {

    return this.apiServerJobExecutionsJobExecutedAllStoreGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseJobsExecutions>) => r.body as ResponseJobsExecutions)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerJobExecutionsJobExecutedAllStoreGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedAllStoreGet$Json$Response(params?: {
    company?: string;
    nameJob?: string;
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseJobsExecutions>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerJobExecutionsJobExecutedAllStoreGetPath, 'get');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('nameJob', params.nameJob, {});
      rb.query('startDate', params.startDate, {});
      rb.query('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseJobsExecutions>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiServerJobExecutionsJobExecutedAllStoreGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedAllStoreGet$Json(params?: {
    company?: string;
    nameJob?: string;
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<ResponseJobsExecutions> {

    return this.apiServerJobExecutionsJobExecutedAllStoreGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseJobsExecutions>) => r.body as ResponseJobsExecutions)
    );
  }

  /**
   * Path part for operation apiServerJobExecutionsJobExecutedServerDateControlStoreGet
   */
  static readonly ApiServerJobExecutionsJobExecutedServerDateControlStoreGetPath = '/api/Server/jobExecutions/jobExecuted/serverDateControl/store';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerJobExecutionsJobExecutedServerDateControlStoreGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedServerDateControlStoreGet$Plain$Response(params?: {
    ip?: string;
    nameOffice?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseServerDateControl>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerJobExecutionsJobExecutedServerDateControlStoreGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('nameOffice', params.nameOffice, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseServerDateControl>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiServerJobExecutionsJobExecutedServerDateControlStoreGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedServerDateControlStoreGet$Plain(params?: {
    ip?: string;
    nameOffice?: string;
  },
  context?: HttpContext

): Observable<ResponseServerDateControl> {

    return this.apiServerJobExecutionsJobExecutedServerDateControlStoreGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseServerDateControl>) => r.body as ResponseServerDateControl)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerJobExecutionsJobExecutedServerDateControlStoreGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedServerDateControlStoreGet$Json$Response(params?: {
    ip?: string;
    nameOffice?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseServerDateControl>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerJobExecutionsJobExecutedServerDateControlStoreGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('nameOffice', params.nameOffice, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseServerDateControl>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiServerJobExecutionsJobExecutedServerDateControlStoreGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedServerDateControlStoreGet$Json(params?: {
    ip?: string;
    nameOffice?: string;
  },
  context?: HttpContext

): Observable<ResponseServerDateControl> {

    return this.apiServerJobExecutionsJobExecutedServerDateControlStoreGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseServerDateControl>) => r.body as ResponseServerDateControl)
    );
  }

  /**
   * Path part for operation apiServerJobExecutionsJobExecutedServerDateControlAllStoreGet
   */
  static readonly ApiServerJobExecutionsJobExecutedServerDateControlAllStoreGetPath = '/api/Server/jobExecutions/jobExecuted/serverDateControl/allStore';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerJobExecutionsJobExecutedServerDateControlAllStoreGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedServerDateControlAllStoreGet$Plain$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseServerDateControl>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerJobExecutionsJobExecutedServerDateControlAllStoreGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseServerDateControl>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiServerJobExecutionsJobExecutedServerDateControlAllStoreGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedServerDateControlAllStoreGet$Plain(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponseServerDateControl> {

    return this.apiServerJobExecutionsJobExecutedServerDateControlAllStoreGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseServerDateControl>) => r.body as ResponseServerDateControl)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerJobExecutionsJobExecutedServerDateControlAllStoreGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedServerDateControlAllStoreGet$Json$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseServerDateControl>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerJobExecutionsJobExecutedServerDateControlAllStoreGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseServerDateControl>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiServerJobExecutionsJobExecutedServerDateControlAllStoreGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedServerDateControlAllStoreGet$Json(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponseServerDateControl> {

    return this.apiServerJobExecutionsJobExecutedServerDateControlAllStoreGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseServerDateControl>) => r.body as ResponseServerDateControl)
    );
  }

  /**
   * Path part for operation apiServerJobExecutionsJobExecutedServerDateControlStoredProcedureGet
   */
  static readonly ApiServerJobExecutionsJobExecutedServerDateControlStoredProcedureGetPath = '/api/Server/jobExecutions/jobExecuted/serverDateControl/storedProcedure';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerJobExecutionsJobExecutedServerDateControlStoredProcedureGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedServerDateControlStoredProcedureGet$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerJobExecutionsJobExecutedServerDateControlStoredProcedureGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
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
   * To access the full response (for headers, for example), `apiServerJobExecutionsJobExecutedServerDateControlStoredProcedureGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerJobExecutionsJobExecutedServerDateControlStoredProcedureGet(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiServerJobExecutionsJobExecutedServerDateControlStoredProcedureGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiServerDatabaseNamesGet
   */
  static readonly ApiServerDatabaseNamesGetPath = '/api/Server/database/names';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerDatabaseNamesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseNamesGet$Plain$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDatabaseNames>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerDatabaseNamesGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseDatabaseNames>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiServerDatabaseNamesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseNamesGet$Plain(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseDatabaseNames> {

    return this.apiServerDatabaseNamesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDatabaseNames>) => r.body as ResponseDatabaseNames)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerDatabaseNamesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseNamesGet$Json$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDatabaseNames>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerDatabaseNamesGetPath, 'get');
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
        return r as StrictHttpResponse<ResponseDatabaseNames>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiServerDatabaseNamesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseNamesGet$Json(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponseDatabaseNames> {

    return this.apiServerDatabaseNamesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDatabaseNames>) => r.body as ResponseDatabaseNames)
    );
  }

  /**
   * Path part for operation apiServerDatabaseSizeStoreGet
   */
  static readonly ApiServerDatabaseSizeStoreGetPath = '/api/Server/database/size/store';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerDatabaseSizeStoreGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseSizeStoreGet$Plain$Response(params?: {
    ip?: string;
    officeName?: string;
    nameDatabase?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDatabaseSize>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerDatabaseSizeStoreGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('officeName', params.officeName, {});
      rb.query('nameDatabase', params.nameDatabase, {});
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
   * To access the full response (for headers, for example), `apiServerDatabaseSizeStoreGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseSizeStoreGet$Plain(params?: {
    ip?: string;
    officeName?: string;
    nameDatabase?: string;
  },
  context?: HttpContext

): Observable<ResponseDatabaseSize> {

    return this.apiServerDatabaseSizeStoreGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDatabaseSize>) => r.body as ResponseDatabaseSize)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerDatabaseSizeStoreGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseSizeStoreGet$Json$Response(params?: {
    ip?: string;
    officeName?: string;
    nameDatabase?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDatabaseSize>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerDatabaseSizeStoreGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('officeName', params.officeName, {});
      rb.query('nameDatabase', params.nameDatabase, {});
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
   * To access the full response (for headers, for example), `apiServerDatabaseSizeStoreGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseSizeStoreGet$Json(params?: {
    ip?: string;
    officeName?: string;
    nameDatabase?: string;
  },
  context?: HttpContext

): Observable<ResponseDatabaseSize> {

    return this.apiServerDatabaseSizeStoreGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDatabaseSize>) => r.body as ResponseDatabaseSize)
    );
  }

  /**
   * Path part for operation apiServerDatabaseSizeAllNamesGet
   */
  static readonly ApiServerDatabaseSizeAllNamesGetPath = '/api/Server/database/size/allNames';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerDatabaseSizeAllNamesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseSizeAllNamesGet$Plain$Response(params?: {
    ip?: string;
    officeName?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDatabaseSize>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerDatabaseSizeAllNamesGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('officeName', params.officeName, {});
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
   * To access the full response (for headers, for example), `apiServerDatabaseSizeAllNamesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseSizeAllNamesGet$Plain(params?: {
    ip?: string;
    officeName?: string;
  },
  context?: HttpContext

): Observable<ResponseDatabaseSize> {

    return this.apiServerDatabaseSizeAllNamesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDatabaseSize>) => r.body as ResponseDatabaseSize)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerDatabaseSizeAllNamesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseSizeAllNamesGet$Json$Response(params?: {
    ip?: string;
    officeName?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDatabaseSize>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerDatabaseSizeAllNamesGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('officeName', params.officeName, {});
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
   * To access the full response (for headers, for example), `apiServerDatabaseSizeAllNamesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseSizeAllNamesGet$Json(params?: {
    ip?: string;
    officeName?: string;
  },
  context?: HttpContext

): Observable<ResponseDatabaseSize> {

    return this.apiServerDatabaseSizeAllNamesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDatabaseSize>) => r.body as ResponseDatabaseSize)
    );
  }

  /**
   * Path part for operation apiServerDatabaseSizeNameGet
   */
  static readonly ApiServerDatabaseSizeNameGetPath = '/api/Server/database/size/name';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerDatabaseSizeNameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseSizeNameGet$Plain$Response(params?: {
    company?: string;
    nameDatabase?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDatabaseSize>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerDatabaseSizeNameGetPath, 'get');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('nameDatabase', params.nameDatabase, {});
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
   * To access the full response (for headers, for example), `apiServerDatabaseSizeNameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseSizeNameGet$Plain(params?: {
    company?: string;
    nameDatabase?: string;
  },
  context?: HttpContext

): Observable<ResponseDatabaseSize> {

    return this.apiServerDatabaseSizeNameGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDatabaseSize>) => r.body as ResponseDatabaseSize)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerDatabaseSizeNameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseSizeNameGet$Json$Response(params?: {
    company?: string;
    nameDatabase?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDatabaseSize>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerDatabaseSizeNameGetPath, 'get');
    if (params) {
      rb.query('company', params.company, {});
      rb.query('nameDatabase', params.nameDatabase, {});
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
   * To access the full response (for headers, for example), `apiServerDatabaseSizeNameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseSizeNameGet$Json(params?: {
    company?: string;
    nameDatabase?: string;
  },
  context?: HttpContext

): Observable<ResponseDatabaseSize> {

    return this.apiServerDatabaseSizeNameGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDatabaseSize>) => r.body as ResponseDatabaseSize)
    );
  }

  /**
   * Path part for operation apiServerDatabaseStoresGet
   */
  static readonly ApiServerDatabaseStoresGetPath = '/api/Server/database/stores';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerDatabaseStoresGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseStoresGet$Plain$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDatabaseSize>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerDatabaseStoresGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiServerDatabaseStoresGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseStoresGet$Plain(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponseDatabaseSize> {

    return this.apiServerDatabaseStoresGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDatabaseSize>) => r.body as ResponseDatabaseSize)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiServerDatabaseStoresGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseStoresGet$Json$Response(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseDatabaseSize>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ApiServerDatabaseStoresGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiServerDatabaseStoresGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiServerDatabaseStoresGet$Json(params?: {
    company?: string;
  },
  context?: HttpContext

): Observable<ResponseDatabaseSize> {

    return this.apiServerDatabaseStoresGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseDatabaseSize>) => r.body as ResponseDatabaseSize)
    );
  }

}
