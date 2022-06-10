const Employee = require('./Employee');

class Engineer extends Employee {
   constructor(name, id, email, gitHub){
      
      super(name, id, email);

      this.GitHub = gitHub;
   }

   getGitHub(){
      return `Engineer's GitHub: ${this.GitHub}`; 
   };

};

module.exports = Engineer;