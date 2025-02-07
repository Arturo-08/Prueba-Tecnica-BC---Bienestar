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
import { mainAppReducer } from './mainAppReducer';


export const reducers: ActionReducerMap<StateApp> = {
  mainApp: mainAppReducer
};

export const metaReducers: MetaReducer<StateApp>[] = isDevMode() ? [] : [];




