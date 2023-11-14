import { Injectable } from "@angular/core";
import { Observable, Subject, catchError, concatMap, mergeMap, tap } from "rxjs";
import { InformationMaterialDto, MaterialsDto, ResponseMaterialDto } from "src/app/api/api_actualizar/models";
import { MaterialsService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";

@Injectable({
  providedIn: "root",
})
export class MaterialInformationService {
  private materials = new Subject<MaterialsDto[]>();
  public materials$ = this.materials.asObservable();

  private materialsMain = new Subject<MaterialsDto[]>();
  public materialsMain$ = this.materialsMain.asObservable();

  private materialsInformation = new Subject<InformationMaterialDto[]>();
  public materialsInformation$ = this.materialsInformation.asObservable();

  private dialogInformation = new Subject<boolean>();
  public dialogInformation$ = this.dialogInformation.asObservable();

  constructor(private materialService: MaterialsService, private calledHttpService: CalledHttpService) {}

  public getMaterialGeneric(ip: string, materialCode: string): void {
    this.getMaterialsGenerics(ip, materialCode);
    this.getMainMaterialsGenerics(ip, materialCode);
  }

  public getMaterialsGenerics(ip: string, materialCode: string): void {
    this.materialService
      .apiMaterialsGenericGet$Json({ ip, materialCode })
      .pipe(
        tap((res) => this.materials.next(res.data!)),
        concatMap((val: ResponseMaterialDto) => this.getMainGeneric(ip, materialCode, val)),
        catchError((error) => {
          this.getMainGeneric(ip, materialCode, null).subscribe();
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
  private getMainGeneric(ip: string, materialCode: string, val: ResponseMaterialDto | null): Observable<ResponseMaterialDto> {
    return this.materialService.apiMaterialsMainGenericGet$Json({ ip, materialCode }).pipe(
      tap((res) => {
        const resMap = res.data?.map((r) => {
          return {
            ...r,
            spDisabled: val?.data?.some((s) => s.codigo == r.codigo),
          };
        });
        this.materialsMain.next(resMap!);
      }),
      catchError((error) => this.calledHttpService.errorHandler(error))
    );
  }
  private getMainMaterialsGenerics(ip: string, materialCode: string): void {
    this.materialService
      .apiMaterialsMainGenericGet$Json({ ip, materialCode })
      .pipe(
        tap((res) => this.materialsMain.next(res.data!)),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
  public getMaterialVariant(ip: string, materialVariant: string): void {
    this.materialService
      .apiMaterialsVariantGet$Json({ ip, materialVariant })
      .pipe(
        tap((res) => this.materials.next(res.data!)),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
  public getMaterialBarcode(ip: string, barcode: string): void {
    this.materialService
      .apiMaterialsBarcodeGet$Json({ ip, barcode })
      .pipe(
        tap((res) => this.materials.next(res.data!)),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
  public getMaterialInformation(ip: string, code: string): void {
    this.materialService
      .apiMaterialsInformationGet$Json({ ip, code })
      .pipe(
        tap((res) => this.materialsInformation.next(res.data!)),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }

  public clearMaterials(): void {
    this.materials.next([]);
    this.materialsMain.next([]);
  }

  public setDialog(): void {
    this.dialogInformation.next(true);
  }
}
