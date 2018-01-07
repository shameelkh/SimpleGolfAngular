// get access to the "golfApp" we created inside app.js
var golfApp = angular.module("golfApp");

// Define the controller, this is were the logic goes
var testController = function() {
    this.message = "This is a test controller"
}

// attach "testController" defined above to the application
// and call it "TestCtrl"
golfApp.controller('TestCtrl', testController);