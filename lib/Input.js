const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');


class Input{

   // get the user information as a promise for engineers and interns
   getManagerInfo(){
      return inquirer.prompt([
            {
               type: "input",
               message: "Enter the Manager's name:",
               name: "name"
            },
            {
               type: 'input',
               message: "Manager's ID:",
               name: "id"
            },
            {
               type:'input',
               message: "Manager's Email:",
               name: "email"
            },
            {
               type: "input",
               message: "Enter the office number:",
               name:"officeNumber"
            }
         ]).then(managerInfo => {
            this.getInfo(managerInfo);
         })
   }

   getInfo(managerObj) {
      if(!managerObj.otherEmployee){
         managerObj.otherEmployee = []
      }

      console.log(
      `
      =============
      Add Employee
      =============
      `
      )

      return inquirer
               .prompt([
                  {
                     type: 'list',
                     message: 'Would you like to add an Engineer or Intern?',
                     name: 'role',
                     choices: ['Engineer', 'Intern']
                  },
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

               ]).then(employeeData => {
                  managerObj.otherEmployee.push(employeeData);
                  if(employeeData.addMore){
                     this.getInfo(managerObj);
                  } else {
                     this.ObjList(managerObj)
                  };
               });

   };

   // Make the appropriate object based on user info for role.
   makeObj(name, id, email, role, rest){
      if (role === "Engineer"){
         const employeeObj = new Engineer(name, id, email, rest);
         return employeeObj;
      } else {
         const employeeObj = new Intern(name, id, email, rest);
         return employeeObj;
      }
   };

   ObjList(obj){
      const {otherEmployee, ...managerInfo} = obj;
      // create the manager object
      const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
      // create the other objects
      let allEmployObjArr = otherEmployee.map(({name, id, email, role, ...rest}) => {
         return this.makeObj(name, id, email, role, Object.values(rest)[0]);
      });
      allEmployObjArr.push(manager);
      console.log(allEmployObjArr)
   }

   writeTofile(arr){
      fs.writeFile('../dist/index.html', JSON.stringify(arr), err => {
         if(err) throw err;

         console.log(arr);
      })
   }

      
};


// testing purpouses
input = new Input();

input.getManagerInfo();

