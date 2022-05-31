const Employee = require('./Employee');

class Engineer extends Employee {
   constructor(name, id, email, gitHub){
      
      super(name, id, email);

      this.gitHub = gitHub;
   }

   getGitHub(){
      return `Engineer's GitHub: ${this.gitHub}`;
   }

};

module.exports = Engineer;