import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, catchError, concatMap, tap } from "rxjs";
import { BarCodeDto, MaterialInfoDto, MaterialsDto, ResponseMaterialDto, UpdateMaterial } from "src/app/api/api_actualizar/models";
import { MaterialsService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { ITypeMaterials } from "../models/material-interface";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";

@Injectable({
  providedIn: "root",
})
export class MaterialInformationService {
  private typeMat!: ITypeMaterials;

  private materials = new BehaviorSubject<MaterialsDto[]>([]);
  public materials$ = this.materials.asObservable();

  private materialsVariants = new BehaviorSubject<MaterialsDto[]>([]);
  public materialsVariants$ = this.materialsVariants.asObservable();

  private materialsVariantsMain = new BehaviorSubject<MaterialsDto[]>([]);
  public materialsVariantsMain$ = this.materialsVariantsMain.asObservable();

  private typeMaterial = new Subject<ITypeMaterials>();
  public typeMaterial$ = this.typeMaterial.asObservable();

  private materialsMain = new BehaviorSubject<MaterialsDto[]>([]);
  public materialsMain$ = this.materialsMain.asObservable();

  private materialsInformation = new BehaviorSubject<MaterialInfoDto[]>([]);
  public materialsInformation$ = this.materialsInformation.asObservable();

  private dialogInformation = new Subject<{ show: boolean; isElectronic: boolean }>();
  public dialogInformation$ = this.dialogInformation.asObservable();

  private dialogEditMaterial = new BehaviorSubject<boolean>(false);
  public dialogEditMaterial$ = this.dialogEditMaterial.asObservable();

  private editMaterial = new Subject<MaterialsDto>();
  public editMaterial$ = this.editMaterial.asObservable();

  private editMaterialBarcode = new Subject<BarCodeDto[]>();
  public editMaterialBarcode$ = this.editMaterialBarcode.asObservable();

  private loadMaterial = new BehaviorSubject<boolean>(false);
  public loadMaterial$ = this.loadMaterial.asObservable();

  constructor(private materialService: MaterialsService, private calledHttpService: CalledHttpService, private toastMesagge: ToastMessagesService) {
    this.typeMaterial$.subscribe((res) => (this.typeMat = res));
  }
  public getMaterial(ip: string, materialVariant: string): void {
    this.getMaterialHttp(ip, materialVariant)
      .pipe(
        tap((res) => this.materials.next(res.data!)),
        concatMap((val) => this.mainMaterialHttp(ip, materialVariant, val)),
        catchError((error) => {
          this.mainMaterialHttp(ip, materialVariant, null).subscribe();
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
  public getMaterialVariants(ip: string, materialVariant: string): void {
    this.materialsVariants.next([]);
    this.materialsVariantsMain.next([]);
    this.materialVariants(ip, materialVariant)
      .pipe(
        tap((res) => this.materialsVariants.next(res.data!)),
        concatMap((val) => this.mainMaterialVariants(ip, materialVariant, val)),
        catchError((error) => {
          this.mainMaterialVariants(ip, materialVariant, null).subscribe();
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
  public getMaterialBarcode(ip: string, materialVariant: string): void {
    this.materialBarcode(ip, materialVariant)
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
  private getMaterialHttp(ip: string, materialCode: string): Observable<ResponseMaterialDto> {
    return this.materialService.apiMaterialsCodeGet$Json({ ip, materialCode });
  }

  private mainMaterialHttp(ip: string, materialCode: string, val: ResponseMaterialDto | null): Observable<ResponseMaterialDto> {
    return this.materialService.apiMaterialsMainCodeGet$Json({ ip, materialCode }).pipe(
      tap((res) => {
        const resMap = res.data?.map((r) => {
          let validatePrecio = val?.data?.find((f) => f.codigo == r.codigo);
          let spPrice: boolean = true;
          if (validatePrecio) {
            if (Number(validatePrecio.precio) == Number(r.precio) || r.precio == null) spPrice = true;
            else spPrice = false;
          }
          return {
            ...r,
            spDisabled: val?.data?.some((s) => s.codigo == r.codigo),
            spPriceDisabled: spPrice,
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
  private mainMaterial(ip: string, materialVariant: string, val: ResponseMaterialDto | null): Observable<ResponseMaterialDto> {
    return this.materialService.apiMaterialsMainVariantGet$Json({ ip, materialVariant }).pipe(
      tap((res) => {
        const resMap = res.data?.map((r) => {
          let validatePrecio = val?.data?.find((f) => f.codigo == r.codigo);
          let spPrice: boolean = true;
          if (validatePrecio) {
            if (Number(validatePrecio.precio) == Number(r.precio) || r.precio == null) spPrice = true;
            else spPrice = false;
          }
          return {
            ...r,
            spDisabled: val?.data?.some((s) => s.codigo == r.codigo),
            spPriceDisabled: spPrice,
          };
        });
        this.materialsMain.next(resMap!);
      }),
      catchError((error) => this.calledHttpService.errorHandlerMain(error))
    );
  }
  private mainMaterialVariants(ip: string, materialVariant: string, val: ResponseMaterialDto | null): Observable<ResponseMaterialDto> {
    return this.materialService.apiMaterialsMainVariantGet$Json({ ip, materialVariant }).pipe(
      tap((res) => {
        const resMap = res.data?.map((r) => {
          let validatePrecio = val?.data?.find((f) => f.codigo == r.codigo);
          let spPrice: boolean = true;
          if (validatePrecio) {
            if (Number(validatePrecio.precio) == Number(r.precio) || r.precio == null) spPrice = true;
            else spPrice = false;
          }
          return {
            ...r,
            spDisabled: val?.data?.some((s) => s.codigo == r.codigo),
            spPriceDisabled: spPrice,
          };
        });
        this.materialsVariantsMain.next(resMap!);
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
          let validatePrecio = val?.data?.find((f) => f.codigo == r.codigo);
          let spPrice: boolean = true;
          if (validatePrecio) {
            if (Number(validatePrecio.precio) == Number(r.precio) || r.precio == null) spPrice = true;
            else spPrice = false;
          }
          return {
            ...r,
            spDisabled: val?.data?.some((s) => s.codigo == r.codigo),
            spPriceDisabled: spPrice,
          };
        });
        this.materialsMain.next(resMap!);
      }),
      catchError((error) => this.calledHttpService.errorHandlerMain(error))
    );
  }
  public getMaterialInformation(ip: string, code: string, electronic: boolean): void {
    this.materialService
      .apiMaterialsInformationGet$Json({ ip, code })
      .pipe(
        tap((res) => {
          this.dialogInformation.next({ show: true, isElectronic: electronic });
          this.materialsInformation.next(res.data!);
        }),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
  public SpComunicateMaterial(ip: string, code: string): void {
    this.materialService
      .apiMaterialsComunicateGet$Json({ ip, code })
      .pipe(
        tap((res) => {
          this.toastMesagge.showToast("tc", "success", "Éxito", res.message!);
          this.loadMaterial.next(true);
        }),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }
  public clearMaterials(): void {
    this.materials.next([]);
    this.materialsMain.next([]);
  }
  public setTypeMaterial(type: ITypeMaterials, code: string) {
    this.typeMaterial.next(type);
  }
  private getBarcode(ip: string, code: string): void {
    this.materialService
      .apiMaterialsEditBarcodeGet$Json({ ip, code })
      .pipe(
        tap((res) => {
          this.dialogEditMaterial.next(true);
          this.editMaterialBarcode.next(res.data!);
        }),
        catchError((error) => this.calledHttpService.errorHandlerMain(error))
      )
      .subscribe();
  }
  public setDialogEdit(ip: string, material: MaterialsDto): void {
    const materialClone = { ...material };
    this.editMaterial.next(materialClone);
    this.getBarcode(ip, material.codigo!);
  }
  public putMaterial(ip: string, materialUpdate: UpdateMaterial): void {
    this.materialService
      .apiMaterialsUpdatePut$Json({ ip, body: materialUpdate })
      .pipe(
        tap((res) => {
          this.toastMesagge.showToast("tc", "success", "Éxito", res.message!);
          this.loadMaterial.next(true);
        }),
        catchError((error) => {
          this.dialogEditMaterial.next(false);
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe({
        complete: () => this.dialogEditMaterial.next(false),
      });
  }
  public putMaterialMain(company: string, materialUpdate: UpdateMaterial): void {
    this.materialService
      .apiMaterialsMainUpdatePut$Json({ company, body: materialUpdate })
      .pipe(
        tap((res) => {
          this.toastMesagge.showToast("tc", "success", "Éxito matriz", res.message!);
          this.loadMaterial.next(true);
        }),
        catchError((error) => {
          this.dialogEditMaterial.next(false);
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe({
        complete: () => this.dialogEditMaterial.next(false),
      });
  }
  public SpComunicatePrice(ip: string, code: string): void {
    this.materialService
      .apiMaterialsComunicatePriceGet$Json({ ip, code })
      .pipe(
        tap((res) => {
          this.toastMesagge.showToast("tc", "success", "Éxito", res.message!);
          this.loadMaterial.next(true);
        }),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }
  public closeDialog(): void {
    this.dialogEditMaterial.next(false);
  }

  public InsertMaterialElectronic(ip: string, segmentCode: string): void {
    this.materialService
      .apiMaterialsElectronicPost$Json({ ip, segmentCode })
      .pipe(
        tap((res) => {
          this.toastMesagge.showToast("tc", "success", "Éxito", res.message!);
          this.dialogInformation.next({ show: false, isElectronic: false });
        }),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }

  public deleteMaterialElectronic(ip: string, segmentCode: string): void {
    this.materialService
      .apiMaterialsElectronicDelete$Json({ ip, segmentCode })
      .pipe(
        tap((res) => {
          this.toastMesagge.showToast("tc", "success", "Éxito", res.message!);
          this.dialogInformation.next({ show: false, isElectronic: false });
        }),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }
}
