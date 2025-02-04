import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { StateApp } from '../app.state';
import { mainStatesReducer } from './mainStates.reducer';
import { userInfoReducer } from './userInfo.reducer';


export const reducers: ActionReducerMap<StateApp> = {
  mainStates: mainStatesReducer,
  userInfo: userInfoReducer
};

export const metaReducers: MetaReducer<StateApp>[] = isDevMode() ? [] : [];




