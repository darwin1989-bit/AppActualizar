import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, catchError, concatMap, tap } from "rxjs";
import { MaterialInfoDto, MaterialsDto, ResponseMaterialDto } from "src/app/api/api_actualizar/models";
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

  private materialsInformation = new BehaviorSubject<MaterialInfoDto[]>([]);
  public materialsInformation$ = this.materialsInformation.asObservable();

  private dialogInformation = new Subject<boolean>();
  public dialogInformation$ = this.dialogInformation.asObservable();

  constructor(private materialService: MaterialsService, private calledHttpService: CalledHttpService) {}

  public getMaterialGenerics(ip: string, materialCode: string): void {
    this.materialsGenerics(ip, materialCode)
      .pipe(
        tap((res) => this.materials.next(res.data!)),
        concatMap((val) => this.mainMaterialGenerics(ip, materialCode, val)),
        catchError((error) => {
          this.mainMaterialGenerics(ip, materialCode, null).subscribe();
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }

  public getMaterialVariants(ip: string, materialVariant: string): void {
    this.materialVariants(ip, materialVariant)
      .pipe(
        tap((res) => this.materials.next(res.data!)),
        concatMap((val) => this.mainMaterialVariants(ip, materialVariant, val)),
        catchError((error) => {
          this.mainMaterialVariants(ip, materialVariant, null).subscribe();
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
  public getMaterialBarcode(ip: string, materialVariant: string): void {
    this.materialVariants(ip, materialVariant)
      .pipe(
        tap((res) => this.materials.next(res.data!)),
        concatMap((val) => this.mainMaterialBarcode(ip, materialVariant, val)),
        catchError((error) => {
          this.mainMaterialBarcode(ip, materialVariant, null).subscribe();
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }

  private materialsGenerics(ip: string, materialCode: string): Observable<ResponseMaterialDto> {
    return this.materialService.apiMaterialsGenericGet$Json({ ip, materialCode });
  }

  private mainMaterialGenerics(ip: string, materialCode: string, val: ResponseMaterialDto | null): Observable<ResponseMaterialDto> {
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
      catchError((error) => this.calledHttpService.errorHandlerMain(error))
    );
  }

  private materialVariants(ip: string, materialVariant: string): Observable<ResponseMaterialDto> {
    return this.materialService.apiMaterialsVariantGet$Json({ ip, materialVariant });
  }

  private mainMaterialVariants(ip: string, materialVariant: string, val: ResponseMaterialDto | null): Observable<ResponseMaterialDto> {
    return this.materialService.apiMaterialsMainVariantGet$Json({ ip, materialVariant }).pipe(
      tap((res) => {
        const resMap = res.data?.map((r) => {
          return {
            ...r,
            spDisabled: val?.data?.some((s) => s.codigo == r.codigo),
          };
        });
        this.materialsMain.next(resMap!);
      }),
      catchError((error) => this.calledHttpService.errorHandlerMain(error))
    );
  }

  public materialBarcode(ip: string, barcode: string): Observable<ResponseMaterialDto> {
    return this.materialService.apiMaterialsBarcodeGet$Json({ ip, barcode });
  }

  private mainMaterialBarcode(ip: string, barcode: string, val: ResponseMaterialDto | null): Observable<ResponseMaterialDto> {
    return this.materialService.apiMaterialsMainBarcodeGet$Json({ ip, barcode }).pipe(
      tap((res) => {
        const resMap = res.data?.map((r) => {
          return {
            ...r,
            spDisabled: val?.data?.some((s) => s.codigo == r.codigo),
          };
        });
        this.materialsMain.next(resMap!);
      }),
      catchError((error) => this.calledHttpService.errorHandlerMain(error))
    );
  }
  public getMaterialInformation(ip: string, code: string): void {
    this.materialService
      .apiMaterialsInformationGet$Json({ ip, code })
      .pipe(
        tap((res) => {
          this.dialogInformation.next(true);
          this.materialsInformation.next(res.data!);
        }),
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
}
function complete(arg0: () => void): import("rxjs").OperatorFunction<ResponseMaterialDto, unknown> {
  throw new Error("Function not implemented.");
}
