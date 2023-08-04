import { GetClientDto } from "src/app/api/api_actualizar/models";
import { IEmployee, IGender, IRetention, ITypeDocument } from "./clients-interface";

export const TypeDocumentObj: ITypeDocument[] = [
  { name: "CÉDULA", type: "C" },
  { name: "RUC", type: "R" },
  { name: "PASAPORTE", type: "P" },
];

export const ClientObj: GetClientDto = {
  numero_Idcliente: "",
  nombre_Razon: "",
  nombre_Comercial: "",
  fecha_Creacion: "",
  email: "",
  cli_Sexo: "",
  tipo_Idcliente: "",
  contribuyente_Especial: "",
  esempleado: "",
  cli_Fecha_Nacimiento: "",
  nombre_Direccion: "",
  direccion: "",
  num_Fono1: "",
  num_Fono2: "",
};

export const IsEmployedObj: IEmployee[] = [
  {
    name: "SI",
    code: "S",
  },
  {
    name: "NO",
    code: "N",
  },
];
export const GenderObj: IGender[] = [
  {
    name: "MASCULINO",
    code: "M",
  },
  {
    name: "FEMENINO",
    code: "F",
  },
];
export const RetentionObj: IRetention[] = [
  {
    taxpayer: "",
    accounting: "",
    exporter: "",
  },
];
