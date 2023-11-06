/* tslint:disable */
/* eslint-disable */
import { CreditNoteDto } from './credit-note-dto';
export interface InvoiceDto {
  data_CreditNote?: null | Array<CreditNoteDto>;
  descuento?: null | string;
  estacionId?: null | string;
  fecha_Factura?: null | string;
  iva?: null | string;
  moneda?: null | string;
  nombre?: null | string;
  nombre_Razon?: null | string;
  notaCredito?: null | string;
  numero_Factura?: null | string;
  numero_Idcliente?: null | string;
  oficina?: null | string;
  serie_Factura?: null | string;
  subtotal?: null | string;
  tipo_Documento?: null | string;
  tipo_Idcliente?: null | string;
  totalfactura?: null | string;
  userid?: null | string;
  valoriva?: null | string;
}
