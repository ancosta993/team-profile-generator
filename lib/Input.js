const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');


class Input{
   constructor(){
      this.employeeObjArr = [];
   }
   // get the user information as a promise
   getInfo(){
      inquirer
         .prompt([
            {
               type: 'input',
               message: 'Employee Name:',
               name: 'name'
            },
            {
               type: 'input',
               message: 'Employee ID:',
               name: 'id'
            },
            {
               type: 'input',
               message: 'Employee Email:',
               name: 'email'
            },
            {
               type: 'list',
               message: 'Employee Role: ',
               name: 'role',
               choices: ['Manager', 'Engineer', 'Intern']
            },
            {
               type:'input',
               message:"Enter Engineer's GitHub:",
               name: 'engGitHub',
               when: ({role}) => {
                  if (role === 'Engineer'){
                     return true;
                  } else {
                     return false;
                  }
               }
            },
            {
               type:'input',
               message:"Enter Manager's Office Number:",
               name: 'manOffice',
               when: ({role}) => {
                  if (role === 'Manager'){
                     return true;
                  } else {
                     return false;
                  }
               }
            },
            {
               type:'input',
               message: "Enter Intern's School Name:",
               name: 'intSchool',
               when: ({role}) => {
                  if (role === 'Intern'){
                     return true;
                  } else {
                     return false;
                  }
               }
            },
            {
               type: 'confirm',
               message: "Would you like to add another employee?",
               name: 'addMore',
               default: false
            }
         // the code below calls the makeObj method and creates the obj
         ]).then(({name, id, email, role, addMore, ...rest}) => {
            this.makeObj(name, id, email, role, Object.values(rest)[0]);

            if (addMore){
               console.log(
               `
               ====================
               Add Another Employee
               ====================
               `)

               this.getInfo();
            } else {this.writeTofile(this.employeeObjArr)};
         })
   }

   // Make the appropriate object based on user info for role.
   makeObj(name, id, email, role, rest){
      if (role === "Engineer"){
         const employeeObj = new Engineer(name, id, email, rest);
         this.employeeObjArr.push(employeeObj);
      } else if (role === "Manager"){
         const employeeObj = new Manager(name, id, email, rest);
         this.employeeObjArr.push(employeeObj);
      } else {
         const employeeObj = new Intern(name, id, email, rest);
         this.employeeObjArr.push(employeeObj);
      }
   }

   writeTofile(arr){
      console.log(arr);
   }

      
};


// testing purpouses
input = new Input();

input.getInfo();

