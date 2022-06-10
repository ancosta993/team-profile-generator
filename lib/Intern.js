const Employee = require('./Employee.js');

class Intern extends Employee{
   constructor(name, id, email, school){
      // inherit from Employee
      super(name, id, email);

      this.School = school;
   }

   getSchool(){
      return `Intern's School: ${this.School}`;
   }
};

module.exports = Intern;