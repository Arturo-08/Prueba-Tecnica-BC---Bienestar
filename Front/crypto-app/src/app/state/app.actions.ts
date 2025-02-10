import { createAction, props } from '@ngrx/store';
import { Authentication } from '../models/authentication.model';
import { CountryDetails } from '../models/countryDetails.models';

export const getInfoUser = createAction(
  '[Login Page] Login',
  props<{loginCredentials: any}>()
);
export const successGetInfoUser = createAction(
  '[Login Page] Login Success',
  props<{ payload: Authentication }>()
);
export const errorGetInfoUser = createAction(
  '[Login Page] Login error',
  props<{ errorMsg: String }>()
);


export const getCurrenciesByCountry = createAction(
  '[Country Currencies] Currencies',
  props<{countryRequest: any}>()
);
export const successGetCurrenciesByCountry = createAction(
  '[Country Currencies] Currencies Success',
  props<{ payload: CountryDetails}>()
);
export const errorGetCurrenciesByCountry = createAction(
  '[Country Currencies] Currencies error',
  props<{ errorMsg: String }>()
);
