import { schema } from 'normalizr';

export const country = new schema.Entity(
  'countries',
  {},
  { idAttribute: 'country_code' }
);

export const mediaType = new schema.Entity('mediaTypes');
