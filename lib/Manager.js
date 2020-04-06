// require employee.js
const Employee = require("./Employee")
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;

    
    }
    //function will return the officenumber
    getOfficeNumber(){
        return this.officeNumber;
    }
    //function will the return the role
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;