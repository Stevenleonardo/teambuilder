// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//Requires the employee.js 
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school ){
        super(name, id, email)
        this.school = school;

    
    }
    //function will return the school input
    getSchool(){
        return this.school;
    }
    //function will return the role
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;