import { InvoiceDetailsDto } from "src/app/api/api_actualizar/models";
import { ITypeInvoice } from "./invoices-interface";

export const TypeInvoiceObj: ITypeInvoice[] = [
  { name: "SERIE DE FACTURA", type: "NF" },
  { name: "NÚMERO DE IDENTIFICACIÖN", type: "NC" },
  { name: "TODAS LAS FACTURAS", type: "FT" },
];

export const InvoiceDetailsObj: InvoiceDetailsDto = {
  invoiceMethodPayment: [],
  invoicesDet: [],
};
