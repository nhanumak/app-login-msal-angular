import { bootstrapApplication } from '@angular/platform-browser';

import { App } from './app/app';
import { appConfig } from './app/app.config';

import { msalInstance } from './app/auth-config';

async function bootstrap() {

  await msalInstance.initialize();

  await bootstrapApplication(App, appConfig);
}

bootstrap().catch(err => console.error(err));

// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';
// import { MsalRedirectComponent } from '@azure/msal-angular';

// import { msalInstance } from './app/auth-config';

// async function bootstrap() {

//   // IMPORTANT
//   await msalInstance.initialize();

//   await bootstrapApplication(App, appConfig);
// }

// bootstrap().catch(err => console.error(err));