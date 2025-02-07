import { createReducer, on } from '@ngrx/store';
import * as Actions from '../app.actions';
import { initialMainApp, MainApp } from '../../models/mainApp.model';
import { initialUserInfo, UserInfo } from '../../models/userInfo.model';



export const mainAppReducer = createReducer(
  initialMainApp,
  on(Actions.getInfoUser, (state) => {
    return { ...state, loading: true };
  }),
  on(Actions.successGetInfoUser, (state, response) => {
    return {
      ...state,
      loading: false,
      success: true,
      message: response.authentication.message,
      userInfo: analizeNull(response.authentication),
    };
  }),
  on(Actions.errorGetInfoUser, (state, message) => {
    return {
      ...state,
      loading: false,
      success: false,
      error: true,
      message: message.errorMsg,
      userInfo: {
        ...state.userInfo,
        isAuthenticated: false,
      },
    };
  })
);

export function analizeNull(apiResponse:any):any{
  let response = {...initialUserInfo};
  if(apiResponse.authenticated){
    response.isAuthenticated = apiResponse.authenticated;
    response.userEmail= apiResponse.userInfo.userEmail;
    response.userName= apiResponse.userInfo.userName;
    response.currencies= apiResponse.userInfo.currencies;
    response.countryName= apiResponse.userInfo.countryName;
  }
  return response;
}

