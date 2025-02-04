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
        tap(() =>{console.log("Login Api in queue");}),
        mergeMap((action) => {
            console.log("Login Api in process");
            return this.backApiService.postData("list-users", action.loginCredentials).pipe(
                map(response => successGetInfoUser({userInfo:response})),
                catchError((err : { message: string }) => of(errorGetInfoUser({errorMsg: err.message}))),
                tap(() => {console.log("Login Api end")})
            )
        })
    );
  });
}
