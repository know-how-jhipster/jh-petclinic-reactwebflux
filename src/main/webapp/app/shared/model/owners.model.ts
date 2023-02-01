import { IPets } from 'app/shared/model/pets.model';

export interface IOwners {
  id?: number;
  firstname?: string;
  lastname?: string;
  address?: string;
  city?: string | null;
  telephone?: string;
  pets?: IPets[] | null;
}

export const defaultValue: Readonly<IOwners> = {};
