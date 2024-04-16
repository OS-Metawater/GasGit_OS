"use strict";
/**
 * USE YOUR OWN CREDENTIALS THEN DELETE AFTER RUNNING ONCE
 * DONT PUT ON PUBLIC WITH REAL CREDENTIALS 
 *
 * setting your user properties, one time, with your credentials
 * running this will provoke an oauth dialog, since any refresh tokens will be cleared out
 * once you have run this once, you can delete it from this file.
 * @return {void}
 */
function oneTimeSetProperties () {
    const clientId = '150d72e9c3998030f995'
    const clientSecret = 'c5ffb0927f9b0603edfcd67330065818cfedb8ee'
   // used by all using this script
  var propertyStore = PropertiesService.getUserProperties();

  cGoa.GoaApp.setPackage (propertyStore , { 
    clientId,
    clientSecret,
    scopes : [
      'gist',
      'repo'
    ],
    service: 'github',
    packageName: 'gasgit'
  });

}

