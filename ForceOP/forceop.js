ModAPI.require("player");
//add from an js file using push
var adminUsernames = ["owner"];
//more passwords from passwords.js
var commonPasswords = ["1234", "qwerty", "password", "p@ssword"];


if (ModAPI.player !== null) ModAPI.displayToChat({message: adminUsernames[0]});


//runUsernames();