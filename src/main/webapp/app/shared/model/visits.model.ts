import dayjs from 'dayjs';
import { IPets } from 'app/shared/model/pets.model';

export interface IVisits {
  id?: number;
  visitdate?: string;
  description?: string;
  pet?: IPets | null;
}

export const defaultValue: Readonly<IVisits> = {};
