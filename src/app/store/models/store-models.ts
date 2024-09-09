export interface TypeGiftCard {
  name: string;
  type: string;
}

export interface ISelect {
  name: string;
  type: string;
}

export const TypeGiftCardObject: TypeGiftCard[] = [
  { name: "NÚMERO TARJETA", type: "nt" },
  { name: "IDENTIFICACIÓN", type: "ide" },
];
