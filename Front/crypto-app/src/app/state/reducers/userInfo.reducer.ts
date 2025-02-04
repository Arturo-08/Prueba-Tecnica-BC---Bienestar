import { createReducer, on } from '@ngrx/store';
import * as Actions from '../app.actions';
import { initialUserInfo } from '../../models/userInfo.model';
import { initialMainStates } from '../../models/mainStates.model';

export const userInfoReducer = createReducer(
  initialUserInfo,
  on(Actions.getInfoUser, (state) => {
    return { ...state};
  }),
  on(Actions.successGetInfoUser, (state, userInfoResponse) => {
    return { ...state,
      userEmail:userInfoResponse.userInfo.userEmail,
      userName: userInfoResponse.userInfo.userName,
      currencies: userInfoResponse.userInfo.currencies,
      countryName:userInfoResponse.userInfo.countryName};
  })
);
