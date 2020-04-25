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
        default: "Not Available"
    },
    {    
        type: "input",
        name: "version",
        message: "What is the project version?",
        default: "Not Available"
    },
    {    
        type: "input",
        name: "installation",
        message: "How to install the project?",
        default: "node index.js"
    },
    {    
        type: "input",
        name: "usage",
        message: "How to run the project?",
        default: "Not Available"
    },
    {
        type: "list",
        message: "Which license will be used for the project?",
        name: "license",
        choices: [
            "Apache license 2.0", 
            "GNU General Public License v3.0", 
            "MIT",
            "The Unlicense"
        ],
        default: 2
    },
    {
        type: "input",
        message: "How to contribute for the project?",
        name: "contribute",
        default: "Not Available"
    },
    {
        type: "input",
        message: "Any tests run on the project?",
        name: "test",
        default: "Not Available"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username",
        validate: function(answer)
        { 
            if(answer == "") {
                return "You must enter your github username";
            }
            return true;
        }
    }, 
    {
        type: "input",
        message: "What is your github email?",
        name: "email",
        validate: function(answer)
        { 
            if(answer == "") {
                return "You must enter your github email";
            }
            return true;
        }
    }
]);
}

async function init() {
    console.log("Hi welcome to readme file generator")
    try{
        const data = await promptUser();
        const license = data.license;
        const badge = await renderBadge(license);
        const readme = generateMarkdown(data,badge);
        await writeFileAsync("PROJECT_README.md",readme);
        console.log("Successfully create the project readme");
    } catch(err) {
      console.log(err);
    }
}

async function renderBadge(license){
    let badge = "";
    switch(license){
        case "Apache license 2.0":
            return badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "GNU General Public License v3.0":
            return badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        case "MIT":
            return badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case "The Unlicense":
            return badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
        default:
            console.log("Render badge failed");
    }
}

init();
