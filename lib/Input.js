const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');


class Input{

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
            }
         // the code below calls the makeObj method and creates the obj
         ]).then(({name, id, email, role, ...rest}) => {
            this.makeObj(name, id, email, role, Object.values(rest)[0]);
         });
   }

   // Make the appropriate object based on user info for role.
   makeObj(name, id, email, role, rest){
      if (role === "Engineer"){
         const engineer = new Engineer(name, id, email, rest);
         console.log(engineer);
      } else if (role === "Manager"){
         const manager = new Manager(name, id, email, rest)
         console.log(manager);
      } else {
         const intern = new Intern(name, id, email, rest);
         console.log(intern);
      }
   }
}


// testing purpouses
input = new Input();

input.getInfo();