const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
//Empty array where the objs will
const teamRender = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const manager = () => {
    //where prompts are placed
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name",
                name: "name",

                //function to ensure only letters are being used
                validate: function (value) {
                    var letters = value.match(/[a-z]/);
                    //conditional given depending if standards met
                    if (letters) {
                        return true
                    }
                    else {
                        return "Name must contain letters only"
                    }
                },
            },
            {
                type: "input",
                message: "What is your ID?",
                name: "id",

                //function to ensure only numbers are being used
                validate: function (value) {
                    var numbers = value.match(/[0-9]/);
                    //conditional given depending if standards met
                    if (numbers) {
                        return true
                    }
                    else {
                        return "ID must contain numbers only"
                    }

            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email",

                //function to ensure email is entered correctly
                validate: function (value) {
                    var mail = value.match(/[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]/);
                    //conditional given depending if standards met
                    if (mail) {
                        return true
                    }
                    else {
                        return "Email not entered correctly"
                    }    
                }

            },
            {
                type: "input",
                message: "What is your ID?",
                name: "officenumber",

                //function to ensure only numbers are being used
                validate: function (value) {
                    var officeNumbers = value.match(/[0-9]/);
                    //conditional given depending if standards met
                    if (officeNumbers) {
                        return true
                    }
                    else {
                        return "officenumbers must contain numbers only"
                    }
                }

            },
        ]),
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
