import { createAction, props } from '@ngrx/store';
import { Authentication } from '../models/authentication.model';

export const getInfoUser = createAction(
  '[Login Page] Login',
  props<{loginCredentials: any}>()
);
export const successGetInfoUser = createAction(
  '[Login Page] Login Success',
  props<{ authentication: Authentication }>()
);
export const errorGetInfoUser = createAction(
  '[Login Page] Login error',
  props<{ errorMsg: String }>()
);
