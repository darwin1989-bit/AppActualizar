import { MaterialPromotionDto, UpdateMaterial } from "src/app/api/api_actualizar/models";
import { ITypeMaterials } from "./material-interface";

export interface ISelect {
  name: string;
  type: string;
}

export const TypeMaterialObj: ITypeMaterials[] = [
  { name: "GENÉRICO", type: "CG" },
  { name: "VARIANTE", type: "CV" },
  { name: "CÓDIGO DE BARRAS", type: "CB" },
];

export const SelectObj: ISelect[] = [
  { name: "SI", type: "S" },
  { name: "NO", type: "N" },
];
export const SelectStatusObj: ISelect[] = [
  { name: "ACTIVO", type: "A" },
  { name: "INACTIVO", type: "I" },
];

export const SelectSOrdenObj: ISelect[] = [
  { name: "1", type: "1" },
  { name: "2", type: "2" },
];

export const SaveMaterialObj: UpdateMaterial = {
  codigo: "",
  restringidoDsctos: "",
  status: "",
  barCode: null,
};

export const PromotionsObj: MaterialPromotionDto[] = [
  {
    fecha: null,
    id: null,
    mensaje: null,
    oficina: null,
    responsePromotion: null,
    respuestaPromocion: undefined,
  },
];
