"use strict";
/**
 * SET THIS STUFF TO WHATEVER YOU NEED
 */
var SETTINGS = {
  EXTRACT: { // where to put the sources to
    TO: "/GasGit/Extraction/Scripts"
  },
  PARENT: {  // where to start looking for scripts
    SCRIPTS:[
      "/GasGit"
    ]
  },
  GIT: {
    COMMITTER: {
      "name": "OS-Metawater",
      "email": "silkovskaya-olga@metawater.co.jp"
    },
    USERAGENT: "OS-Metawater",
    LIBRARIES: "libraries/",
    SCRIPTS: "",
    ALL: false                   // overrides committed dates to do all found items - this'll take ages
  }
};

//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 token
//c5ffb0927f9b0603edfcd67330065818cfedb8ee secret
//150d72e9c3998030f995 clientid

//"/Published Scripts"