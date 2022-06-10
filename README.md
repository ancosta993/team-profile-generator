# Team Profile Generator
Click [here](https://drive.google.com/file/d/1JhnXGIsDRJIOdKnqXa99pKx3ZEN7e5GK/view) for a video demonstrating the application.

## Table of Content
- ***[Introduction](#introduction)***
- ***[Tools](#tools)***
- ***[Installation Instruction](#installation-instruction)***
- ***[Usage](#usage)***
- ***[Function](#function-pseudocode)***
- ***[Testing](#testing)***


## Introduction
This is a command line application coded with Node.js and its libraries: inquirer.js and jest.js. The application takes input from the user through the command line and generates an HTML page based on the user inputs. The command line asks user to enter information about employees: name, id, email, gitHub, School, office number etc.

## Tools
- Node.js
- inquirer.js
  - takes the user input
- jest.js
  - used for Test Driven Deveopment (TDD)
- File System (fs)

## Installation Instruction
In order to use the project, the user needs to install Node.js and download necessary node modules. After the Node.js is installed, `npm install inquirer` needs to be run. File system is already installed with Node.js. Finally, though not necessary, but if the user wants to test the classes used in the application, jest.js must be installed through `npm install jest`. The `test` property value of `scripts` property in _pacakge.json_ file must be changed to 'jest'.

## Usage
The application is invoked through the command `node Index.js` in the command line. The user must first `cd` into the local repo location and lib folder.
The application will start once the command above is run:
- Asks to enter the information about the team manager first.
  - Asks for the following: name, id, email, office number
- once the manager's information is done, the user is prompted to enter either an Engineer or Intern through a choice list.
- choosing either options will prompt the user to enter further information:
  - asks for the following for an Engineer: name, id, email, github
  - asks for the following for an Intern: name, id, email, school name
- once the second employee information is done, the user is prompted to confirm if they want to enter another employee. The user is given the choice of (y/n). y for yest and n for no.
- if the user chooses y, then they will be prompted to choose between Engineer and Intern again. 
- if the user chooses n, then the program will end and an HTML file will be generated. A style sheet will also be copied.
- The HTML and CSS files will be at the dist/ folder.

## Function (pseudocode)
The application attempts to follow the Object Oriented Programming paradigm. Employees are chosen and objects The classes used are Employee, Engineer, Manager, and Intern. <br>
### Classes
Main classes used are: Employee, Engineer, Manager, Intern <br>
_Employee_ is the parent calss for all the other classes. The constructor takes **(name, id, email)** from the user and assigns them as its values. It has in its prototype the methods for: **getRole() getName() getId() getEmail()**. <br>
_Manager_ class `extends` the _Employee_ class and adds the unique property office number and method getOffice(). <br>
_Engineer_ class `extends` the _Employee_ class and adds the unique property GitHub and method getGitHub(). <br>
_Intern_ class `extends` the _Employee_ class and adds the unique property School and method getSchool(). <br>

The `lib/Index.js` file runs the program. It imports all the classes and creates the object using the user information for **(name, id, email, rest)** where rest is info about either office number, github, or school. It is decided through inquirer which prompt to ask the user.   
It then uses the `fs` module to write an HTML file and copy a style sheet with CSS.   

## Testing 
There is no significant test required for the application. The Test Driven Development strategy was used to test all the classes before deploying them. There are a total of 25 tests writte. The tests are written for every property and methods for the classes.
