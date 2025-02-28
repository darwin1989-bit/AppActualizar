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

import { ResponseBarCode } from '../models/response-bar-code';
import { ResponseComunicationMaterial } from '../models/response-comunication-material';
import { ResponseMaterialDto } from '../models/response-material-dto';
import { ResponseMaterialInfoDto } from '../models/response-material-info-dto';
import { ResponseMaterialPromotionDto } from '../models/response-material-promotion-dto';
import { ResponsePromotionStoreDto } from '../models/response-promotion-store-dto';
import { UpdateMaterial } from '../models/update-material';

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
   * Path part for operation apiMaterialsCodeGet
   */
  static readonly ApiMaterialsCodeGetPath = '/api/Materials/code';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsCodeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsCodeGet$Plain$Response(params?: {
    ip?: string;
    materialCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsCodeGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiMaterialsCodeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsCodeGet$Plain(params?: {
    ip?: string;
    materialCode?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialDto> {

    return this.apiMaterialsCodeGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialDto>) => r.body as ResponseMaterialDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsCodeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsCodeGet$Json$Response(params?: {
    ip?: string;
    materialCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsCodeGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiMaterialsCodeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsCodeGet$Json(params?: {
    ip?: string;
    materialCode?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialDto> {

    return this.apiMaterialsCodeGet$Json$Response(params,context).pipe(
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
   * Path part for operation apiMaterialsMainCodeGet
   */
  static readonly ApiMaterialsMainCodeGetPath = '/api/Materials/main/code';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsMainCodeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsMainCodeGet$Plain$Response(params?: {
    ip?: string;
    materialCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsMainCodeGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiMaterialsMainCodeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsMainCodeGet$Plain(params?: {
    ip?: string;
    materialCode?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialDto> {

    return this.apiMaterialsMainCodeGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialDto>) => r.body as ResponseMaterialDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsMainCodeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsMainCodeGet$Json$Response(params?: {
    ip?: string;
    materialCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsMainCodeGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiMaterialsMainCodeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsMainCodeGet$Json(params?: {
    ip?: string;
    materialCode?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialDto> {

    return this.apiMaterialsMainCodeGet$Json$Response(params,context).pipe(
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

  /**
   * Path part for operation apiMaterialsInformationGet
   */
  static readonly ApiMaterialsInformationGetPath = '/api/Materials/information';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsInformationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsInformationGet$Plain$Response(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialInfoDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsInformationGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('code', params.code, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMaterialInfoDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsInformationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsInformationGet$Plain(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialInfoDto> {

    return this.apiMaterialsInformationGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialInfoDto>) => r.body as ResponseMaterialInfoDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsInformationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsInformationGet$Json$Response(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialInfoDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsInformationGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('code', params.code, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMaterialInfoDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsInformationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsInformationGet$Json(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialInfoDto> {

    return this.apiMaterialsInformationGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialInfoDto>) => r.body as ResponseMaterialInfoDto)
    );
  }

  /**
   * Path part for operation apiMaterialsPromotionGet
   */
  static readonly ApiMaterialsPromotionGetPath = '/api/Materials/promotion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsPromotionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsPromotionGet$Plain$Response(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialPromotionDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsPromotionGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('code', params.code, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMaterialPromotionDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsPromotionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsPromotionGet$Plain(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialPromotionDto> {

    return this.apiMaterialsPromotionGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialPromotionDto>) => r.body as ResponseMaterialPromotionDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsPromotionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsPromotionGet$Json$Response(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMaterialPromotionDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsPromotionGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('code', params.code, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseMaterialPromotionDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsPromotionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsPromotionGet$Json(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<ResponseMaterialPromotionDto> {

    return this.apiMaterialsPromotionGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMaterialPromotionDto>) => r.body as ResponseMaterialPromotionDto)
    );
  }

  /**
   * Path part for operation apiMaterialsComunicateGet
   */
  static readonly ApiMaterialsComunicateGetPath = '/api/Materials/comunicate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsComunicateGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsComunicateGet$Plain$Response(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseComunicationMaterial>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsComunicateGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('code', params.code, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseComunicationMaterial>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsComunicateGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsComunicateGet$Plain(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<ResponseComunicationMaterial> {

    return this.apiMaterialsComunicateGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseComunicationMaterial>) => r.body as ResponseComunicationMaterial)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsComunicateGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsComunicateGet$Json$Response(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseComunicationMaterial>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsComunicateGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('code', params.code, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseComunicationMaterial>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsComunicateGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsComunicateGet$Json(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<ResponseComunicationMaterial> {

    return this.apiMaterialsComunicateGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseComunicationMaterial>) => r.body as ResponseComunicationMaterial)
    );
  }

  /**
   * Path part for operation apiMaterialsEditBarcodeGet
   */
  static readonly ApiMaterialsEditBarcodeGetPath = '/api/Materials/edit/barcode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsEditBarcodeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsEditBarcodeGet$Plain$Response(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseBarCode>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsEditBarcodeGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('code', params.code, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseBarCode>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsEditBarcodeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsEditBarcodeGet$Plain(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<ResponseBarCode> {

    return this.apiMaterialsEditBarcodeGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseBarCode>) => r.body as ResponseBarCode)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsEditBarcodeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsEditBarcodeGet$Json$Response(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseBarCode>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsEditBarcodeGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('code', params.code, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseBarCode>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsEditBarcodeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsEditBarcodeGet$Json(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<ResponseBarCode> {

    return this.apiMaterialsEditBarcodeGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseBarCode>) => r.body as ResponseBarCode)
    );
  }

  /**
   * Path part for operation apiMaterialsUpdatePut
   */
  static readonly ApiMaterialsUpdatePutPath = '/api/Materials/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMaterialsUpdatePut$Plain$Response(params?: {
    ip?: string;
    body?: UpdateMaterial
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseComunicationMaterial>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<ResponseComunicationMaterial>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMaterialsUpdatePut$Plain(params?: {
    ip?: string;
    body?: UpdateMaterial
  },
  context?: HttpContext

): Observable<ResponseComunicationMaterial> {

    return this.apiMaterialsUpdatePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseComunicationMaterial>) => r.body as ResponseComunicationMaterial)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsUpdatePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMaterialsUpdatePut$Json$Response(params?: {
    ip?: string;
    body?: UpdateMaterial
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseComunicationMaterial>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<ResponseComunicationMaterial>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMaterialsUpdatePut$Json(params?: {
    ip?: string;
    body?: UpdateMaterial
  },
  context?: HttpContext

): Observable<ResponseComunicationMaterial> {

    return this.apiMaterialsUpdatePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseComunicationMaterial>) => r.body as ResponseComunicationMaterial)
    );
  }

  /**
   * Path part for operation apiMaterialsMainUpdatePut
   */
  static readonly ApiMaterialsMainUpdatePutPath = '/api/Materials/main/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsMainUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMaterialsMainUpdatePut$Plain$Response(params?: {
    company?: string;
    body?: UpdateMaterial
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseComunicationMaterial>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsMainUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<ResponseComunicationMaterial>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsMainUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMaterialsMainUpdatePut$Plain(params?: {
    company?: string;
    body?: UpdateMaterial
  },
  context?: HttpContext

): Observable<ResponseComunicationMaterial> {

    return this.apiMaterialsMainUpdatePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseComunicationMaterial>) => r.body as ResponseComunicationMaterial)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsMainUpdatePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMaterialsMainUpdatePut$Json$Response(params?: {
    company?: string;
    body?: UpdateMaterial
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseComunicationMaterial>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsMainUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<ResponseComunicationMaterial>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsMainUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMaterialsMainUpdatePut$Json(params?: {
    company?: string;
    body?: UpdateMaterial
  },
  context?: HttpContext

): Observable<ResponseComunicationMaterial> {

    return this.apiMaterialsMainUpdatePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseComunicationMaterial>) => r.body as ResponseComunicationMaterial)
    );
  }

  /**
   * Path part for operation apiMaterialsComunicatePriceGet
   */
  static readonly ApiMaterialsComunicatePriceGetPath = '/api/Materials/comunicate/price';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsComunicatePriceGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsComunicatePriceGet$Plain$Response(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseComunicationMaterial>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsComunicatePriceGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('code', params.code, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseComunicationMaterial>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsComunicatePriceGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsComunicatePriceGet$Plain(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<ResponseComunicationMaterial> {

    return this.apiMaterialsComunicatePriceGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseComunicationMaterial>) => r.body as ResponseComunicationMaterial)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsComunicatePriceGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsComunicatePriceGet$Json$Response(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseComunicationMaterial>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsComunicatePriceGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('code', params.code, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseComunicationMaterial>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsComunicatePriceGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsComunicatePriceGet$Json(params?: {
    ip?: string;
    code?: string;
  },
  context?: HttpContext

): Observable<ResponseComunicationMaterial> {

    return this.apiMaterialsComunicatePriceGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseComunicationMaterial>) => r.body as ResponseComunicationMaterial)
    );
  }

  /**
   * Path part for operation apiMaterialsPromotionStoreGet
   */
  static readonly ApiMaterialsPromotionStoreGetPath = '/api/Materials/promotion/store';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsPromotionStoreGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsPromotionStoreGet$Plain$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponsePromotionStoreDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsPromotionStoreGetPath, 'get');
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
        return r as StrictHttpResponse<ResponsePromotionStoreDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsPromotionStoreGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsPromotionStoreGet$Plain(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponsePromotionStoreDto> {

    return this.apiMaterialsPromotionStoreGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponsePromotionStoreDto>) => r.body as ResponsePromotionStoreDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsPromotionStoreGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsPromotionStoreGet$Json$Response(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponsePromotionStoreDto>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsPromotionStoreGetPath, 'get');
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
        return r as StrictHttpResponse<ResponsePromotionStoreDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsPromotionStoreGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsPromotionStoreGet$Json(params?: {
    ip?: string;
  },
  context?: HttpContext

): Observable<ResponsePromotionStoreDto> {

    return this.apiMaterialsPromotionStoreGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponsePromotionStoreDto>) => r.body as ResponsePromotionStoreDto)
    );
  }

  /**
   * Path part for operation apiMaterialsElectronicPost
   */
  static readonly ApiMaterialsElectronicPostPath = '/api/Materials/electronic';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsElectronicPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsElectronicPost$Plain$Response(params?: {
    ip?: string;
    segmentCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseComunicationMaterial>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsElectronicPostPath, 'post');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('segmentCode', params.segmentCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseComunicationMaterial>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsElectronicPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsElectronicPost$Plain(params?: {
    ip?: string;
    segmentCode?: string;
  },
  context?: HttpContext

): Observable<ResponseComunicationMaterial> {

    return this.apiMaterialsElectronicPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseComunicationMaterial>) => r.body as ResponseComunicationMaterial)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsElectronicPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsElectronicPost$Json$Response(params?: {
    ip?: string;
    segmentCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseComunicationMaterial>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsElectronicPostPath, 'post');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('segmentCode', params.segmentCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseComunicationMaterial>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsElectronicPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsElectronicPost$Json(params?: {
    ip?: string;
    segmentCode?: string;
  },
  context?: HttpContext

): Observable<ResponseComunicationMaterial> {

    return this.apiMaterialsElectronicPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseComunicationMaterial>) => r.body as ResponseComunicationMaterial)
    );
  }

  /**
   * Path part for operation apiMaterialsElectronicDelete
   */
  static readonly ApiMaterialsElectronicDeletePath = '/api/Materials/electronic';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsElectronicDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsElectronicDelete$Plain$Response(params?: {
    ip?: string;
    segmentCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseComunicationMaterial>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsElectronicDeletePath, 'delete');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('segmentCode', params.segmentCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseComunicationMaterial>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsElectronicDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsElectronicDelete$Plain(params?: {
    ip?: string;
    segmentCode?: string;
  },
  context?: HttpContext

): Observable<ResponseComunicationMaterial> {

    return this.apiMaterialsElectronicDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseComunicationMaterial>) => r.body as ResponseComunicationMaterial)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMaterialsElectronicDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsElectronicDelete$Json$Response(params?: {
    ip?: string;
    segmentCode?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseComunicationMaterial>> {

    const rb = new RequestBuilder(this.rootUrl, MaterialsService.ApiMaterialsElectronicDeletePath, 'delete');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('segmentCode', params.segmentCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseComunicationMaterial>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMaterialsElectronicDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMaterialsElectronicDelete$Json(params?: {
    ip?: string;
    segmentCode?: string;
  },
  context?: HttpContext

): Observable<ResponseComunicationMaterial> {

    return this.apiMaterialsElectronicDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseComunicationMaterial>) => r.body as ResponseComunicationMaterial)
    );
  }

}
