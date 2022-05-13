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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
            .then(function(response) {
                console.log(response)
            })
}

// Function call to initialize app
init();
