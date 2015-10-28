'use strict';

/**
 * Module dependencies
 */
var page=require("webpage").create();
var system=require('system');
var url=system.args[1];
var requestCount=0;
var lastRequest;
var requestIdle=300;
var maxTime=5000;

/**
 * PhantomJS script
 */
page.viewportSize={
  width:1920,
  height:1080
}
page.onResourceRequested=function(request){
  requestCount++;
  lastRequest=Date.now();
};

page.onResourceReceived=function(response){
  if(response.response==='end'){
    requestCount--;
  }
};

page.open(url, function(status){
  if(status==="success"){
    var startTime=Date.now();
    lastRequest=startTime;
    
    setInterval(function(){
      var now=Date.now();
      if(requestCount===0&&now>(lastRequest+requestIdle)||now>(startTime+maxTime)){
        console.log(page.content);
        phantom.exit();
      }
    });
  }else{
    console.log("Unable to open page "+url);
    phantom.exit();
  }
});
