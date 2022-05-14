// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation of the project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license of the project?',
        choices: ['MIT','ISC','GPL','NDU']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors of this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the project used for?'
    },
    {
        type: 'input',
        name: 'test',
        message:'What tests were performed?'
    },
    {
        type: 'input',
        name:'username',
        message: 'Enter your Github username?',
    },
    {
        type: 'input',
        name: 'repository',
        message: 'What is your repository?'
    }
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
            .then(function(response) {
                console.log(response)
                fs.writeFileSync('./dist/README.md',generateMarkdown(response))
            })
}

// Function call to initialize app
init();
