/* tslint:disable */
/* eslint-disable */
import { AuthorizingCardCodesDto } from './authorizing-card-codes-dto';
import { UserAgencyDto } from './user-agency-dto';
export interface UserMainDto {
  apellido?: null | string;
  cedula?: null | string;
  estado?: null | string;
  nombre?: null | string;
  nombreCorto?: null | string;
  oficinasAsignadas?: null | Array<UserAgencyDto>;
  password?: null | string;
  perfil_Referencia?: null | string;
  tarjetaAutorizador?: null | Array<AuthorizingCardCodesDto>;
}
