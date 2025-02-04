import { createSelector } from "@ngrx/store";
import { selectUserInfo } from "./app.selectors";
import { UserInfo } from "../../models/userInfo.model";


export const selectUserCurrencies = createSelector(
    selectUserInfo,
    (state: UserInfo) => state.currencies
)