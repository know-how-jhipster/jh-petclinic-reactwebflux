import dayjs from 'dayjs';
import { IVisits } from 'app/shared/model/visits.model';
import { ITypes } from 'app/shared/model/types.model';
import { IOwners } from 'app/shared/model/owners.model';

export interface IPets {
  id?: number;
  name?: string;
  birthdate?: string;
  visits?: IVisits[] | null;
  type?: ITypes | null;
  owner?: IOwners | null;
}

export const defaultValue: Readonly<IPets> = {};
