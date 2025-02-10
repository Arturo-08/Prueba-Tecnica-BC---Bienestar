import { createReducer, on } from '@ngrx/store';
import * as Actions from '../app.actions';
import { initialMainApp, MainApp } from '../../models/mainApp.model';
import { initialUserInfo, UserInfo } from '../../models/userInfo.model';

export const mainAppReducer = createReducer(
  initialMainApp,
  on(Actions.getInfoUser, (state) => {
    return { ...state, success: false, error: false, loading: true };
  }),
  on(Actions.successGetInfoUser, (state, response) => {
    return {
      ...state,
      loading: false,
      success: true,
      error: false,
      message: response.payload.message,
      userInfo: analizeNull(response.payload),
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
  }),
  on(Actions.getCurrenciesByCountry, (state) => {
    return { ...state, loading: true, success: false, error: false };
  }),
  on(Actions.successGetCurrenciesByCountry, (state, response) => {
    return {
      ...state,
      loading: false,
      success: true,
      error: false,
      countryDetails: {
        countryName: response.payload.countryName,
        currencies: response.payload.currencies,
      },
    };
  }),
  on(Actions.errorGetCurrenciesByCountry, (state, message) => {
    return {
      ...state,
      loading: false,
      success: false,
      error: true,
      message: message.errorMsg,
      countryDetails: { countryName: '', currencies: [] },
    };
  })
);

export function analizeNull(apiResponse: any): any {
  let response = { ...initialUserInfo };
  if (apiResponse.authenticated) {
    response.isAuthenticated = apiResponse.authenticated;
    response.userEmail = apiResponse.userInfo.userEmail;
    response.userName = apiResponse.userInfo.userName;
    response.currencies = apiResponse.userInfo.currencies;
    response.countryName = apiResponse.userInfo.countryName;
  }
  return response;
}
