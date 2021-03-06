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
const manager =()=>{
    //where prompts are placed
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name",
                name: "name",

                //function to ensure only letters are being used
                validate: function(value){
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
                validate: function(value) {
                    var numbers = value.match(/[0-9]/);
                    //conditional given depending if standards met
                    if (numbers) {
                        return true
                    }
                    else {
                        return "ID must contain numbers only"
                    }
                }

            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email",
                validate: function(value){
                    var mail = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
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
                message: "What is your officenumber?",
                name: "officenumber",

                //function to ensure only numbers are being used
                validate: function(value){
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
        ])
        .then(answers=>{
            //places users answers in a variable
            var userAnswer = new Manager(answers.name, answers.id, answers.email, answers.officenumber);
            //places into our empty array 
            teamRender.push(userAnswer);
            //run the function newMember
            newMember();
        })
        .catch(error=>{
            if (error.isTtyError) {
                //  Error with prompt
            } else {
                // Something else when wrong
            }
        });
    
}
const newMember=()=>{
    //where prompts are placed for the new member
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to add a new member?",
                choices: ["Intern", "Engineer", "None"],
                name: "newmember",
            }
        ])
        .then(answers=>{
            //conditional if intern is picked
            if (answers.newmember === "Intern") {
                //function intern will be started
                intern();
            }
            //conditional if intern is picked
            if (answers.newmember === "Engineer") {
                //function engineer will be started
                engineer();
            }
            //conditional if intern is picked
            if (answers.newmember === "None") {
                //function fullTeam will be started
                fullTeam();
            }
        })
        .catch(error=>{
            if (error.isTtyError) {
                //  Error with prompt
            } else {
                // Something else when wrong
            }
        });
}
const intern=()=>{
    //where prompts are placed for intern
    inquirer
        .prompt([
            {
                type: "input",
                message: "what is your intern's name?",
                name: "name",

                //function to ensure only letters are being used
                validate: function (value) {
                    var letters = value.match(/[a-z]/);
                    //conditionals if requirements are met
                    if (letters) {
                        return true
                    }
                    else {
                        return "Name must only contain letters"
                    }
                }
            },
            {
                type: "input",
                message: "what is your intern's email?",
                name: "email",

                //function to ensure proper email entered
                validate: function(value){
                    var emailInput = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                    //conditionals if requirements are met
                    if (emailInput) {
                        return true
                    }
                    else {
                        return "Email not entered correctly"
                    }
                }
            },
            {
                type: "input",
                message: "what is your intern's ID?",
                name: "id",

                //function to ensure only numbers are being used
                validate: function(value){
                    var numbers = value.match(/[0-9]/);
                    //conditionals if requirements are met
                    if (numbers) {
                        return true
                    }
                    else {
                        return "ID must only contain numbers"
                    }
                }
            },
            {
                type: "input",
                message: "what is your intern's school?",
                name: "school",

            },
        ])
        .then(answers=>{
            //place answers into a variable
            var userIntern = new Intern(answers.name, answers.email, answers.id, answers.school);
            //place into empty array
            teamRender.push(userIntern);
            //calls the function newmember
            newMember();
        })
        .catch(error=>{
            if (error.isTtyError) {
                //  Error with prompt
            } else {
                // Something else when wrong
            }
        });
}
const engineer=()=>{
    //where prompts are placed for engineer
    inquirer
        .prompt([
            {
                type: "input",
                message: "what is your Engineer's name?",
                name: "name",

                //function to ensure only letters are being used
                validate: function (value) {
                    var letters = value.match(/[a-z]/);
                    //conditionals if requirements are met
                    if (letters) {
                        return true
                    }
                    else {
                        return "Name must only contain letters"
                    }
                }
            },
            {
                type: "input",
                message: "what is your engineer's ID?",
                name: "id",

                //function to ensure only numbers are being used
                validate: function(value){
                    var numbers = value.match(/[0-9]/);
                    //conditionals if requirements are met
                    if (numbers) {
                        return true
                    }
                    else {
                        return "ID must only contain numbers"
                    }
                }
            },
            {
                type: "input",
                message: "what is your engineer's email?",
                name: "email",

                //function to ensure only letters are being used
                validate: function(value){
                    var emailInput = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                    //conditionals if requirements are met
                    if (emailInput) {
                        return true
                    }
                    else {
                        return "Email not entered correctly"
                    }
                }
            },
            {
                type: "input",
                message: "What is your engineer's Github?",
                name: "github"
            }
        ])
        .then(answers=>{
            //place answers into a variable
            var userEngineer = new Engineer(answers.name, answers.email, answers.id, answers.github);
            //place into empty array
            teamRender.push(userEngineer);
            //calls the function newmember
            newMember();
        })
        .catch(error=>{
            if (error.isTtyError){
                //  Error with prompt
            } else {
                // Something else when wrong
            }
        });
}
const fullTeam=()=>{
    //function that will create and write the everything into a file
    fs.writeFile(outputPath, render(teamRender), err => {
        if (err) {
            return console.log(err);
        }
        return console.log("success!!!");
    })
}
// calls the manager function to start the entire sequence
manager();
