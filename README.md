# Sauce_Demo_Automation using Cypress
End to End tests for the web application Sauce Demo by Sauce labs using cypress and Page object model.

## Framework Used
## Page Object Model using Cypress
Page Object Model, also known as POM, is a design pattern where we create an object repository for storing all web elements.In Page Object Model, consider each web page of an application as a class file. Each class file will contain only corresponding web page elements. Using these elements, we can perform operations on the application under test.

### Why Page Object model?
* It is useful in reducing code duplication and improves test case maintenance.
* Helps with reusing code
* It eases readability and reliability of scripts:

### Tools used.
* Visual Studio code

### Dependencies used in the framework
* Cypress 10
* node
* npm
 
### Programming language used
* javascript

### To test Project locally, 
* Clone repository 
* Have node and npm installed.
* Install the node modules by going to the terminal and run command `npm install -g node-modules`
* install cypress by going to the terminal and run command `npm install cypress --save-dev`
* To run tests in one spec file with the Graphical User Interface open, navigate to the terminal and run `npm run test`. A graphical user intaface will open where you can click on the one specific test you want to run.
