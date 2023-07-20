import { OfficesDto } from "src/app/api/api_actualizar/models";
import { ICompany } from "./offices.interface";

export interface userData {
  Id: string;
  Name: string;
  UserName: string;
  UserRol: string;
}

export const DataOffice: OfficesDto = {
  ipRed: "",
  office: "",
  companyInternalCode: "",
  name: "",
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
