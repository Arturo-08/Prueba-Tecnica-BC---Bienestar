import { createSelector } from "@ngrx/store";
import { StateApp } from "../app.state";


export const selectApp = (state: StateApp) => state

export const selectUserInfo = createSelector(
    selectApp,
    (state: StateApp) => state.userInfo
)

export const selectMainStates = createSelector(
    selectApp,
    (state: StateApp) => state.mainStates
)