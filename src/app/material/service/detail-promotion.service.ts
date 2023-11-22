import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, catchError, tap } from "rxjs";
import { ResponsePromotion } from "src/app/api/api_actualizar/models";
import { MaterialsService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { __values } from "tslib";

@Injectable({
  providedIn: "root",
})
export class DetailPromotionService {
  private dialogPromotion = new Subject<boolean>();
  public dialogPromotion$ = this.dialogPromotion.asObservable();

  private materialPromotion = new BehaviorSubject<ResponsePromotion[]>([]);
  public materialPromotion$ = this.materialPromotion.asObservable();

  constructor(private materialService: MaterialsService, private calledHttpService: CalledHttpService) {}

  public getMaterialPromotion(ip: string, code: string): void {
    this.materialService
      .apiMaterialsPromotionGet$Json({ ip, code })
      .pipe(
        tap((res) => {
          this.dialogPromotion.next(true);
          var resMap = res.data!.responsePromotion?.map((r) => {
            return {
              ...r,
              id: res.data?.id,
              fecha: res.data?.fecha,
            };
          });
          this.materialPromotion.next(resMap!);
        }),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
}
