require("dotenv").config();
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");



const questions = [
    {    
        type: "input",
        name: "title",
        message: "What is the project title?"
    },
    {    
        type: "input",
        name: "description",
        message: "What is the project description?"
    },
    {    
        type: "input",
        name: "content",
        message: "What is the table of content for the project?"
    },
    {    
        type: "input",
        name: "installation",
        message: "How to install the project?"
    },
    {    
        type: "input",
        name: "usage",
        message: "How to use the project?"
    },
    {
        type: "list",
        message: "Which license will be used for the project?",
        name: "license",
        choices: [
        "Academic Free License v3.0", 
        "Apache license 2.0", 
        "GNU General Public License v3.0", 
        "MIT",
        "Open Software License 3.0"
        ],
        default: 0
    },
    {
        type: "input",
        message: "Who are the contributors for the project?",
        name: "contributor"
    },
    {
        type: "input",
        message: "Any tests run on the project?",
        name: "test"
    },
    {
        type: "input",
        message: "What is your github email?",
        name: "email"
    }
];

inquirer.prompt(questions)
.then(writeToFile);


function writeToFile(fileName, data) {
    fileName = "ProjectREADME.md";
    fs.writeFile(fileName, data ,function(err){
        if (err) {
            return console.log(err);
          }
          generateMarkdown(data);
          console.log("readme file successfuly created!");
    })
}

function init() {

}

init();
