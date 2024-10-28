const path= require('path');

//getting the absolute path of the current directory
module.exports=path.dirname(process.mainModule.filename);
//dirname gives the directory name of the current file
//mainModule.filename gives the absolute path of the current file
//so we are getting the absolute path of the current directory
//this is used to get the absolute path of the current directory
//so that we can use it in the app.js file