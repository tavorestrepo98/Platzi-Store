// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store.herokuapp.com/products',
  firebase : {
    apiKey: 'AIzaSyCUeN-D5j6EEl97vlgMymejbk1oqlE5yeM',
    authDomain: 'platzi-store-bf240.firebaseapp.com',
    databaseURL: 'https://platzi-store-bf240.firebaseio.com',
    projectId: 'platzi-store-bf240',
    storageBucket: 'platzi-store-bf240.appspot.com',
    messagingSenderId: '930702350031',
    appId: '1:930702350031:web:b7b7a1d404d015651909ba'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
