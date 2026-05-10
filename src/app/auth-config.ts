import {
  PublicClientApplication,
  BrowserCacheLocation
} from '@azure/msal-browser';

export const msalInstance = new PublicClientApplication({
  auth: {
    clientId: '48d18e2a-fc31-4ac2-899c-3863cfeee23a',
    authority: 'https://login.microsoftonline.com/d48ef826-a777-4689-b2c0-4dba79459580',
    redirectUri: 'http://localhost:4200'
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
    storeAuthStateInCookie: false
  }
});

// import {
//   PublicClientApplication,
//   InteractionType
// } from '@azure/msal-browser';

// import {
//   MsalGuardConfiguration,
//   MsalInterceptorConfiguration
// } from '@azure/msal-angular';

// export const msalInstance = new PublicClientApplication({
//   auth: {
//     clientId: '48d18e2a-fc31-4ac2-899c-3863cfeee23a',
//     authority:
//       'https://login.microsoftonline.com/d48ef826-a777-4689-b2c0-4dba79459580',
//     redirectUri: 'http://localhost:4200'
//   },

//   cache: {
//     cacheLocation: 'localStorage'
//   }
// });

// export const guardConfig: MsalGuardConfiguration = {
//   interactionType: InteractionType.Redirect,

//   authRequest: {
//     scopes: [
//       'api://b8d33776-4f2a-4e6c-8641-75101193b251/access_as_user'
//     ]
//   }
// };

// export const interceptorConfig: MsalInterceptorConfiguration = {
//   interactionType: InteractionType.Redirect,

//   protectedResourceMap: new Map([
//     [
//       'https://localhost:7001/api',
//       [
//         'api://b8d33776-4f2a-4e6c-8641-75101193b251/access_as_user'
//       ]
//     ]
//   ])
// };