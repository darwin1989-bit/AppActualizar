export interface ITypeUsers {
  name: string;
  type: string;
}

export interface ISelect {
  name: string;
  type: string;
}

export const TypeUsersObj: ITypeUsers[] = [
  { name: "USUARIO", type: "ua" },
  { name: "CÉDULA", type: "ce" },
  { name: "TODOS LOS USUARIOS", type: "tu" },
];

export const SelectStatus: ISelect[] = [
  { name: "Habilitado", type: "1" },
  { name: "Deshabilitado", type: "0" },
];

export const SelectIpPosMobile: ISelect[] = [{ name: "default", type: "default" }];
