import { createAction, props } from '@ngrx/store';
import { UserInfo } from '../models/userInfo.model';

export const getInfoUser = createAction(
  '[Login Page] Login',
  props<{loginCredentials: any}>()
);
export const successGetInfoUser = createAction(
  '[Login Page] Login Success',
  props<{ userInfo: UserInfo }>()
);
export const errorGetInfoUser = createAction(
  '[Login Page] Login error',
  props<{ errorMsg: String }>()
);
