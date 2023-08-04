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
export interface IRetention {
  taxpayer: string;
  accounting: string;
  exporter: string;
}

export interface IRbRetention {
  name: string;
  key: boolean;
}
