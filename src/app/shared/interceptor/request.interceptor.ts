import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from "@angular/common/http";
import { Observable, finalize, tap } from "rxjs";
import { CalledHttpService } from "../services/called-http.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private callHttp: CalledHttpService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem("token")!;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const requestClone = req.clone({
      headers: headers,
    });

    if (!req.url.includes("es.json")) {
      return next.handle(requestClone).pipe(
        finalize(() => this.callHttp.hideLoad()),
        tap({
          next: () => this.callHttp.showLoad(),
        })
      );
    } else {
      return next.handle(requestClone);
    }
  }
}
