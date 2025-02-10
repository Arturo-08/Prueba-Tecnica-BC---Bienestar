import { createSelector } from "@ngrx/store";
import { StateApp } from "../app.state";
import { MainApp } from "../../models/mainApp.model";
import { UserInfo } from "../../models/userInfo.model";


export const selectApp = (state: StateApp) => state

export const selectMainApp = createSelector(
    selectApp,
    (state: StateApp) => state.mainApp
)

export const selectLoadingState = createSelector(
    selectMainApp,
    (state: MainApp) => state.loading
)

export const selectSuccessState = createSelector(
    selectMainApp,
    (state: MainApp) => state.success
)

export const selectErrorState = createSelector(
    selectMainApp,
    (state: MainApp) => {state.error, state.message}
)

export const selectUserInfo = createSelector(
    selectMainApp,
    (state: MainApp) => state.userInfo
)

export const selectCountryDetails = createSelector(
    selectMainApp,
    (state: MainApp) => state.countryDetails
)

export const selectUserCurrenciesAndCountryName = createSelector(
    selectUserInfo,
    (state: UserInfo) => {return {countryName: state.countryName , currencies: state.currencies}}
)

export const selectAuthentication = createSelector(
    selectUserInfo,
    (state: UserInfo) => state.isAuthenticated
)