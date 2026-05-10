import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  provideHttpClient,
  withFetch
} from '@angular/common/http';

import { routes } from './app.routes';

import {
  MSAL_INSTANCE
} from '@azure/msal-angular';

import { msalInstance } from './auth-config';

export const appConfig: ApplicationConfig = {
  providers: [

    provideRouter(routes),

    provideHttpClient(withFetch()),

    {
      provide: MSAL_INSTANCE,
      useValue: msalInstance
    }
  ]
};

// import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { MsalModule, MsalService, MsalGuard, MsalInterceptor } from '@azure/msal-angular';
// import { routes } from './app.routes';
// import { msalInstance, guardConfig, interceptorConfig } from './auth-config';

// export const appConfig: ApplicationConfig = {
//   providers: [
//      provideZoneChangeDetection({
//       eventCoalescing: true
//     }),
//     provideRouter(routes),
//     provideHttpClient(withFetch()
//       withInterceptorsFromDi()
//     ),
//     importProvidersFrom(
//       MsalModule.forRoot(
//         msalInstance,
//         guardConfig,
//         interceptorConfig
//       )
//     ),
//     MsalService,
//     MsalGuard,
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: MsalInterceptor,
//       multi: true
//     }
//   ]
// };