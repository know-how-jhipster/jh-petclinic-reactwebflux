import { ISpecialties } from 'app/shared/model/specialties.model';

export interface IVets {
  id?: number;
  firstname?: string;
  lastname?: string;
  specialties?: ISpecialties[] | null;
}

export const defaultValue: Readonly<IVets> = {};
