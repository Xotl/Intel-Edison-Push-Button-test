var m = require('mraa'); //require mraa
console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console

var button = new m.Gpio(6);// pin J17-7
button.dir(m.DIR_IN); //set the gpio direction to input

var state; //Boolean to hold the state of the button
var readState = function ()
{
  var newState = button.read(); //read the digital value of the pin
  if (newState != state) {
    state = newState;
    console.log('Gpio is ' + state); //write the read value out to the console
  }
};
setInterval(readState, 10);
