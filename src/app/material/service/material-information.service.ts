import { Injectable } from "@angular/core";
import { Subject, catchError, tap } from "rxjs";
import { MaterialsDto } from "src/app/api/api_actualizar/models";
import { MaterialsService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";

@Injectable({
  providedIn: "root",
})
export class MaterialInformationService {
  private materials = new Subject<MaterialsDto[]>();
  public materials$ = this.materials.asObservable();

  constructor(private materialService: MaterialsService, private calledHttpService: CalledHttpService) {}

  public getMaterialsGenerics(ip: string, materialCode: string): void {
    this.materialService
      .apiMaterialsGenericGet$Json({ ip, materialCode })
      .pipe(
        tap((res) => this.materials.next(res.data!)),
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

  public clearMaterials(): void {
    this.materials.next([]);
  }
}
