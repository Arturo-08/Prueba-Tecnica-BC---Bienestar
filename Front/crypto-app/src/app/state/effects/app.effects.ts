import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BackApiService } from '../../services/back.api.service';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { errorGetInfoUser, getInfoUser, successGetInfoUser } from '../app.actions';


@Injectable()
export class AppEffects {

  constructor(private actions$:Actions, private backApiService:BackApiService){}

  getInfoUser$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(getInfoUser),
        mergeMap((action) => {
            return this.backApiService.postData("authentication", action.loginCredentials).pipe(
                map(response => successGetInfoUser({authentication:response})),
                catchError(err => of(errorGetInfoUser({errorMsg: err.message}))),
            )
        })
    );
  });
}
