# Intel Edison - Push Button test
This is a simple test to get started with the Intel Edison Mini Breakout Board using NodeJS (Javascript).

# To install
1. Make sure you have installed `mraa` library and the `mraa` NodeJs module. You can do it by moving to the folder and doing a `npm install mraa`

  *More info on:*
  * https://github.com/intel-iot-devkit/mraa
  * https://github.com/intel-iot-devkit/mraa/blob/master/docs/edison.md
2. Clone this repo (or just the main.js) into your Intel Edison.

# To Run
Just go to the folder where the file is located and execute `node main.js`.


# Conections on the Intel Edison Mini Breakout Board and the protoboard

If you press the button you should see a `The LED is in state 1` message, and when release it the message changes to `The LED is in state 0`, and the LED will turn on whenever you press the button.

**Protoboard**
![alt tag](/Push button test_bb.png)

**Schematic**
![alt tag](/Push button test_esquema.png)

**Full set up**
![alt tag](/image3.jpg)
*Note that i'm not using a push button. This is because i didn't have a push button near during this test. (the green cable replaced my push button)*


**Please check out the other images that are in this repo.**
