// TODO: Include packages needed for this application
const inquirer = require('inquirer');

inquirer.prompt ([
    {
        name: 'projectName',
        type: 'input',
        message: 'What is your projects name?'
    },

    {
        name: 'description',
        type: 'input',
        message: 'Enter a description'
    }, 

    {
        name: 'instillationInstructions',
        type: 'input',
        message: 'Enter instillation instructions'
    },

    {
        name: 'usage',
        type: 'input',
        message: 'Enter usage information'
    },

    {
        name: 'contributionGuidelines',
        type: 'input',
        message: 'Enter contribution guidelines'
    },

    {
        name: 'testInstructions',
        type: 'input',
        message: 'Enter test instructions'
    }
]).then(answers => {
    console.log(answers);
});

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
