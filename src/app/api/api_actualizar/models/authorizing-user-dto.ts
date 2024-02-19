/* tslint:disable */
/* eslint-disable */
import { ParameterizationDays } from './parameterization-days';
export interface AuthorizingUserDto {
  desde?: number;
  estado?: null | string;
  hasta?: number;
  parameterization?: ParameterizationDays;
  rol?: null | string;
}
