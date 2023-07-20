import { ClientDto } from "src/app/api/api_actualizar/models";
import { ITypeDocument } from "./clients-interface";

export const TypeDocumentObj: ITypeDocument[] = [
  { name: "CÉDULA", type: "C" },
  { name: "RUC", type: "R" },
  { name: "PASAPORTE", type: "P" },
];

export const ClientObj: ClientDto = {
  numeroIdcliente: "",
  nombreRazon: "",
  nombreComercial: "",
  fechaIngresocliente: "",
  email: "",
  sexo: "",
  tipoIdcliente: "",
  contribuyenteEspecial: "",
  esempleado: "",
  fechaNacimiento: "",
  nombreDireccion: "",
  direccion: "",
  numFono1: "",
  numFono2: "",
  eMailD: "",
};
