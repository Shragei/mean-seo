'use strict';

/**
 * Module dependencies
 */
var page=require("webpage").create();
var system=require('system');
var url=system.args[1];

/**
 * PhantomJS script
 */
page.open(url, function(status){
  if(status==="success"){
    var startTime=Date.now();
    page.onResourceRequested=function(request){
      
    };
    page.onResourceReceived=function(response){
      
    };
  	
  }else{
    console.log("Unable to open page "+url);
    phantom.exit();
  }
});
