import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BackApiService } from '../../services/back.api.service';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { errorGetCurrenciesByCountry, errorGetInfoUser, getCurrenciesByCountry, getInfoUser, successGetCurrenciesByCountry, successGetInfoUser } from '../app.actions';


@Injectable()
export class AppEffects {

  constructor(private actions$:Actions, private backApiService:BackApiService){}

  getInfoUser$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(getInfoUser),
        mergeMap((action) => {
            return this.backApiService.postData("authentication", action.loginCredentials).pipe(
                map(response => successGetInfoUser({payload:response.data})),
                catchError(err => of(errorGetInfoUser({errorMsg: err.message}))),
            )
        })
    );
  });

  getCountryCurrencies$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(getCurrenciesByCountry),
        mergeMap((action) => {
            return this.backApiService.postData("list-currencies-by-country", action.countryRequest).pipe(
                map(response => successGetCurrenciesByCountry({payload:response.data})),
                catchError(err => of(errorGetCurrenciesByCountry({errorMsg: err.message}))),
            )
        })
    );
  });

  
}
