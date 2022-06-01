class Employee {
   constructor(name, id, email){
      // setting up the given properties
      // values are from user input
      this.name = name;
      this.id = id;
      this.email = email;
   }

   // getName method for returning name of the employee
   getName() {
      return `I am ${this.name}`;
   }

   getId(){
      return `This employee's Id: ${this.id}`
   }

   getEmail(){
      return `This employee's Email: ${this.email}`
   }

   getRole(){
      return `${this.constructor.name}`;
   }
};


module.exports = Employee;