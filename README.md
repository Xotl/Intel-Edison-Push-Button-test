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

The push button is configured as an active high, so if you press it you should see a `Gpio is 1` message, and whe release it the message changes to `Gpio is 0`.

**Protoboard**
![alt tag](/img1.jpg)

**Intel Edison Mini Breakout Board**
![alt tag](/img3.jpg)

**Full set up**
![alt tag](/img2.jpg)
