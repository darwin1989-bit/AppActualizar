/* tslint:disable */
/* eslint-disable */
import { InvoiceCardPlotsDto } from './invoice-card-plots-dto';
import { PaymentzCardPlots } from './paymentz-card-plots';
export interface VoucherDto {
  autorizacion?: null | string;
  base0?: null | string;
  base12?: null | string;
  caja?: null | string;
  codigo_Respuesta?: null | string;
  dataInvoice?: null | Array<InvoiceCardPlotsDto>;
  dataPaymentz?: null | Array<PaymentzCardPlots>;
  fecha_Tx?: null | string;
  grupo_Tarjeta?: null | string;
  hora_Tx?: null | string;
  interes?: null | string;
  ipCliente?: null | string;
  iva?: null | string;
  lote?: null | string;
  mid?: null | string;
  monto?: number;
  numero_Tarjeta?: null | string;
  pca_Ip_Pinpad?: null | string;
  pca_Serie_Medianet?: null | string;
  pca_Serie_Produbanco?: null | string;
  plazo?: null | string;
  red_Adquiriente?: null | string;
  respuesta?: null | string;
  respuestaCompleta?: null | string;
  secuencial?: null | string;
  tid?: null | string;
  tipo_Credito?: null | string;
  tipo_Tx?: null | string;
}
