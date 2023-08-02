export interface ITypeDocument {
  name: string;
  type: string;
}
export interface IEmployee {
  name: string;
  code: string;
}
export interface IClientNotFound {
  typedDocument: ITypeDocument;
  numberID: string;
}
export interface IGender {
  name: string;
  code: string;
}
