// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    API_URL: 'http://backend.evidhya.org/api',
    AUTH_URL: 'http://backend.evidhya.org/api/login',
    LOGIN_URL: 'https://lims.test.corediagnostics.in/auth/google',
    LOGOUT_URL: 'https://lims.test.corediagnostics.in/user/logout',
    REPORT_URL: 'https://testreport.corediagnostics.in/report/',
    ELASTIC_URL: 'https://elastic.lims.corediagnostics.in:443'

};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
