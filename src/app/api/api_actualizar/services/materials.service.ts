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

import { ResponseMaterialDto } from '../models/response-material-dto';

@Injectable({
  providedIn: 'root',
})
export class MaterialsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiMaterialsGenericGet
   */
  static readonly ApiMaterialsGenericGetPath = '/api/Materials/generic';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsGenericGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsGenericGet$Plain$Response(params?: {
    ip?: string;
    materialCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsGenericGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('materialCode', params.materialCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMaterialDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsGenericGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsGenericGet$Plain(params?: {
    ip?: string;
    materialCode?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialDto> {

    return this.apiMaterialsGenericGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialDto>) => r.body as ResponseMaterialDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsGenericGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsGenericGet$Json$Response(params?: {
    ip?: string;
    materialCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsGenericGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('materialCode', params.materialCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMaterialDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsGenericGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsGenericGet$Json(params?: {
    ip?: string;
    materialCode?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialDto> {

    return this.apiMaterialsGenericGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialDto>) => r.body as ResponseMaterialDto)
    );
  }

  /**
   * Path part for operation apiMaterialsVariantGet
   */
  static readonly ApiMaterialsVariantGetPath = '/api/Materials/variant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsVariantGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsVariantGet$Plain$Response(params?: {
    ip?: string;
    materialVariant?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsVariantGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('materialVariant', params.materialVariant, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMaterialDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsVariantGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsVariantGet$Plain(params?: {
    ip?: string;
    materialVariant?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialDto> {

    return this.apiMaterialsVariantGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialDto>) => r.body as ResponseMaterialDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsVariantGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsVariantGet$Json$Response(params?: {
    ip?: string;
    materialVariant?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsVariantGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('materialVariant', params.materialVariant, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMaterialDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsVariantGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsVariantGet$Json(params?: {
    ip?: string;
    materialVariant?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialDto> {

    return this.apiMaterialsVariantGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialDto>) => r.body as ResponseMaterialDto)
    );
  }

  /**
   * Path part for operation apiMaterialsBarcodeGet
   */
  static readonly ApiMaterialsBarcodeGetPath = '/api/Materials/barcode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsBarcodeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsBarcodeGet$Plain$Response(params?: {
    ip?: string;
    barcode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsBarcodeGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('barcode', params.barcode, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMaterialDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsBarcodeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsBarcodeGet$Plain(params?: {
    ip?: string;
    barcode?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialDto> {

    return this.apiMaterialsBarcodeGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialDto>) => r.body as ResponseMaterialDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsBarcodeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsBarcodeGet$Json$Response(params?: {
    ip?: string;
    barcode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsBarcodeGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('barcode', params.barcode, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMaterialDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsBarcodeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsBarcodeGet$Json(params?: {
    ip?: string;
    barcode?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialDto> {

    return this.apiMaterialsBarcodeGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialDto>) => r.body as ResponseMaterialDto)
    );
  }

  /**
   * Path part for operation apiMaterialsMainGenericGet
   */
  static readonly ApiMaterialsMainGenericGetPath = '/api/Materials/main/generic';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsMainGenericGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsMainGenericGet$Plain$Response(params?: {
    ip?: string;
    materialCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsMainGenericGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('materialCode', params.materialCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMaterialDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsMainGenericGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsMainGenericGet$Plain(params?: {
    ip?: string;
    materialCode?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialDto> {

    return this.apiMaterialsMainGenericGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialDto>) => r.body as ResponseMaterialDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsMainGenericGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsMainGenericGet$Json$Response(params?: {
    ip?: string;
    materialCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsMainGenericGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('materialCode', params.materialCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMaterialDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsMainGenericGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsMainGenericGet$Json(params?: {
    ip?: string;
    materialCode?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialDto> {

    return this.apiMaterialsMainGenericGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialDto>) => r.body as ResponseMaterialDto)
    );
  }

  /**
   * Path part for operation apiMaterialsMainVariantGet
   */
  static readonly ApiMaterialsMainVariantGetPath = '/api/Materials/main/variant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsMainVariantGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsMainVariantGet$Plain$Response(params?: {
    ip?: string;
    materialVariant?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsMainVariantGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('materialVariant', params.materialVariant, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMaterialDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsMainVariantGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsMainVariantGet$Plain(params?: {
    ip?: string;
    materialVariant?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialDto> {

    return this.apiMaterialsMainVariantGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialDto>) => r.body as ResponseMaterialDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsMainVariantGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsMainVariantGet$Json$Response(params?: {
    ip?: string;
    materialVariant?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsMainVariantGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('materialVariant', params.materialVariant, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMaterialDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsMainVariantGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsMainVariantGet$Json(params?: {
    ip?: string;
    materialVariant?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialDto> {

    return this.apiMaterialsMainVariantGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialDto>) => r.body as ResponseMaterialDto)
    );
  }

  /**
   * Path part for operation apiMaterialsMainBarcodeGet
   */
  static readonly ApiMaterialsMainBarcodeGetPath = '/api/Materials/main/barcode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsMainBarcodeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsMainBarcodeGet$Plain$Response(params?: {
    ip?: string;
    barcode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsMainBarcodeGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('barcode', params.barcode, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMaterialDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsMainBarcodeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsMainBarcodeGet$Plain(params?: {
    ip?: string;
    barcode?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialDto> {

    return this.apiMaterialsMainBarcodeGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialDto>) => r.body as ResponseMaterialDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsMainBarcodeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsMainBarcodeGet$Json$Response(params?: {
    ip?: string;
    barcode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsMainBarcodeGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('barcode', params.barcode, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMaterialDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsMainBarcodeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsMainBarcodeGet$Json(params?: {
    ip?: string;
    barcode?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialDto> {

    return this.apiMaterialsMainBarcodeGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialDto>) => r.body as ResponseMaterialDto)
    );
  }

}
