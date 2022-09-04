// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  estado: 'Programadores',
  googleSheetsApiKey: 'xxxxxx',
  driveFolderId: 'xxxxx',
  organigramaID: 'xxxxx',
  organigramaCompleto: 'xxxxxxxxxxxxxxxxx',
  archivoUrl: 'xxxxxxxxxxxxxxxxxx',
  calendarEmail: 'xxxxxxxxxxxxxxxxxxx',
  calendarUrl: 'xxxxxxxxxxxxxxxxxxxxxxx',
  project: {
    spreadsheetId: 'xxxxxxxxxxxxxxxxxxxx',
    worksheetName: 'xxxxxxxxxxxxxxxxxx',
  },
  socialMedia: [
    {
      name: 'Twitter',
      url: 'https://twitter.com/itizapopan',
      fontIcon: 'fa-twitter',
      fontSet: 'fa-brands'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/InstitutoTecnologicoDeZapopan/',
      fontIcon: 'fa-facebook',
      fontSet: 'fa-brands'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/itizapopan/',
      fontIcon: 'fa-instagram',
      fontSet: 'fa-brands'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCZQ5ZQY4ZQZQZQZQZQZQZQ',
      fontIcon: 'fa-youtube',
      fontSet: 'fa-brands'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@itizapopan',
      fontIcon: 'fa-tiktok',
      fontSet: 'fa-brands'
    }
  ]
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
