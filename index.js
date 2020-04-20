require("dotenv").config();
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
    return inquirer.prompt([
    {    
        type: "input",
        name: "title",
        message: "What is your project title/name?",
        default: "Default Project Name"
    },
    {    
        type: "input",
        name: "description",
        message: "What is the project description?",
        default: "None"
    },
    {    
        type: "input",
        name: "content",
        message: "What is the table of content for the project?",
        default: "None"
    },
    {    
        type: "input",
        name: "installation",
        message: "How to install the project?",
        default: "None"
    },
    {    
        type: "input",
        name: "usage",
        message: "How to use the project?",
        default: "None"
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
        message: "How to contribute for the project?",
        name: "contributor",
        default: "None"
    },
    {
        type: "input",
        message: "Any tests run on the project?",
        name: "test",
        default: "None"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your github email?",
        name: "email"
    }
]);
}

async function init() {
    console.log("Hi welcome to readme file generator")
    try{
        const data = await promptUser();
        const readme = generateMarkdown(data);
        await writeFileAsync("PROJECT_README.md",readme);
        console.log("Successfully wrote to the project readme");
    } catch(err) {
      console.log(err);
    }
  }

init();
