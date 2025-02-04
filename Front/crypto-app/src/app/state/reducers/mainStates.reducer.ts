import { createReducer, on } from '@ngrx/store';
import * as Actions from '../app.actions';
import { initialMainStates } from '../../models/mainStates.model';

export const mainStatesReducer = createReducer(
  initialMainStates,
  on(Actions.getInfoUser, (state) => {
    return { ...state,
        loading: true
     };
  }),
  on(Actions.successGetInfoUser, (state) => {
    return { ...state,
        loading: false,
        success: true,
     };
  })
);
