// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { stringify } from 'querystring';

export class environment {
  public static readonly production = false;
  public static readonly title = 'SELECT-GAMES';
  public static readonly isContentLoading = false;
  public static readonly isDeployNeeded = false;

  // SERVER
  public static readonly serverUrl = 'http://localhost:8080/';
  
  /* GAMES ENDPOINTS */
  public static readonly flagsUrl = environment.serverUrl + '/flags';
  public static readonly facesUrl = environment.serverUrl + '/faces';

  getUrl(url:string){
    const host  = environment.serverUrl;
    var endpoint: string;

    switch(url){
      case 'flags': endpoint = 'flags';
        break;
     
      case 'actors': endpoint = 'actors';
        break;
        
    }
    return host + endpoint;
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
  
  
