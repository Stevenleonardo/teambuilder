// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//require the employee.js
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email,github ){
        super(name, id, email)
        this.github = github;

    
    }
    //function that returns the github input
    getGithub(){
        return this.github;
    }
    //function that returns the role 
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;