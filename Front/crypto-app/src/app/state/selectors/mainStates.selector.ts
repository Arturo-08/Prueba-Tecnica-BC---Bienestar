import { createSelector } from "@ngrx/store";
import { selectMainStates } from "./app.selectors";
import { MainStates } from "../../models/mainStates.model";


export const selectLoadingState = createSelector(
    selectMainStates,
    (state: MainStates) => state.loading
)