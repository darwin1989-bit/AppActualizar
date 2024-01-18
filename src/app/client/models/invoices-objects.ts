import { InvoiceDetailsDto } from "src/app/api/api_actualizar/models";
import { ITypeInvoice } from "./invoices-interface";

export const TypeInvoiceObj: ITypeInvoice[] = [
  { name: "FACTURA", type: "NF" },
  { name: "NOTA DE CRÉDITO", type: "NC" },
  { name: "IDENTIFICACIÖN", type: "NI" },
  { name: "TODOS LOS DOCUMENTOS", type: "FT" },
];

export const InvoiceDetailsObj: InvoiceDetailsDto = {
  invoiceMethodPayment: [],
  invoicesDet: [],
};
