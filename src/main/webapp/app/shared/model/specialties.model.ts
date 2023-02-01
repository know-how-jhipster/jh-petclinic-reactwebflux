import { IVets } from 'app/shared/model/vets.model';

export interface ISpecialties {
  id?: number;
  name?: string;
  vets?: IVets[] | null;
}

export const defaultValue: Readonly<ISpecialties> = {};
