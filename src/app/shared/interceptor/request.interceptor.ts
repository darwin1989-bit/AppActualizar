import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from "@angular/common/http";
import { Observable, finalize, tap } from "rxjs";
import { CalledHttpService } from "../services/called-http.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  private countRequest: number = 0;

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
      if (!req.url.includes("api/Dashboard")) {
        this.countRequest++;
        this.callHttp.showLoad();
        return next.handle(requestClone).pipe(
          finalize(() => {
            this.countRequest--;
            if (this.countRequest == 0) this.callHttp.hideLoad();
          })
        );
      } else {
        this.callHttp.hideLoad();
        return next.handle(requestClone);
      }
    } else {
      this.callHttp.hideLoad();
      return next.handle(requestClone);
    }
  }
}
