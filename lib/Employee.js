//create a class of employee with a constructor including name, id and email
class Employee{
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //function will return the name input
    getName(){
        return this.name;
    }
    //function will return the ID input
    getId(){
        return this.id;
    }
    //function will return the email input
    getEmail(){
        return this.email;
    }
    //will return the role
    getRole(){
        return "Employee"
    }
}

module.exports = Employee;