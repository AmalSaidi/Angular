export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major?: string;
}

export enum Major {
  Math = 'Math',
  Fr = 'Francais',
  SVT = 'SVT',
  Physique = 'Physique',
}
