import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './state/reducers/app.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { AppEffects } from './state/effects/app.effects';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideStore(reducers, { metaReducers }),
    provideStoreDevtools({ name: "TEST" }),
    provideEffects(AppEffects)
],
};
