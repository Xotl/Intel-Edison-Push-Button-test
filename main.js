var m = require('mraa'); //require mraa
console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console

var ledPin = new m.Gpio(0);// pin J17-1
var buttonPin = new m.Gpio(6);// pin J17-7
var led_state = 0; //Boolean to hold the state of the led

buttonPin.dir(m.DIR_IN);  //set the gpio direction to input
ledPin.dir(m.DIR_OUT); //set the gpio direction to output

var readState = function () {
  var newState = buttonPin.read(); //read the digital value of the pin
  newState = newState ? 0 : 1; // Inverts the state so 1 means the button is down.
  ledPin.write(newState);
  console.log("The LED is in state " + newState);
};

setInterval(readState, 10);
