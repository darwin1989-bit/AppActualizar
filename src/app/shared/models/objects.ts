import { OfficesDto } from "src/app/api/api_actualizar/models";
import { ICompany } from "./offices.interface";

export interface userData {
  Id: string;
  Name: string;
  UserName: string;
  UserRol: string;
}

export const DataOffice: OfficesDto = {
  ip_Red: "",
  oficina: "",
  ofi_Codigo_Interno_Empresa: "",
  nombre: "",
};
export const DataCompany: ICompany = {
  name: "",
  code: "",
};

export const UserDataObj: userData = {
  Id: "",
  Name: "",
  UserName: "",
  UserRol: "",
};
export const CompanyObj: ICompany[] = [
  { name: "ETAFASHION", code: "eta" },
  { name: "MODA RM", code: "rm" },
  { name: "ETAFASHION CR", code: "cr" },
];

export const OfficesMatriz: OfficesDto[] = [
  {
    ip_Red: "172.16.101.11\\ITPOSETA",
    oficina: "000",
    ofi_Codigo_Interno_Empresa: "E001",
    nombre: "MATRIZ ETAFASHION",
  },
  {
    ip_Red: "172.16.101.12\\ITPOSRM",
    oficina: "000",
    ofi_Codigo_Interno_Empresa: "R001",
    nombre: "MATRIZ MODA RM",
  },
  {
    ip_Red: "172.16.200.85",
    oficina: "000",
    ofi_Codigo_Interno_Empresa: "T001",
    nombre: "MATRIZ ETAFASHION CR",
  },
  {
    ip_Red: "172.16.11.236",
    oficina: "000",
    ofi_Codigo_Interno_Empresa: "E001",
    nombre: "MATRIZ PRUEBAS",
  },
];
