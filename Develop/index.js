// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util =require('util');
const {generateMarkdown} = require('./utils/generateMarkdown');


const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    inquirer.prompt([
    {
        name: 'title',
        type: 'input',
        message: 'What is your projects name?',
    },{
        name: 'description',
        type: 'input',
        message: 'Enter a description',
    },{
        name: 'instillation',
        type: 'input',
        message: 'Enter instillation instructions',
    },{
        name: 'usage',
        type: 'input',
        message: 'Enter usage information',
    },{
        name: 'contributions',
        type: 'input',
        message: 'Enter contribution guidelines',
    },{
        name: 'tests',
        type: 'input',
        message: 'Enter test instructions',
    },{
        type: 'list',
        message: 'Choose a license for your project',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license',
    },{
        type: 'input',
        message: 'Github username',
        name: 'questions',
    },{
        type: 'input',
        message: 'E-mail',
        name: 'email',
    }
]).then(answers => {
    writeToFile(answers)
    console.log('successfully created README file')
}).catch((err) => console.error(err));

};

const writeToFile = answers => {
    writeFileAsync('README.md', generateMarkdown(answers))
}

promptUser();


    /* Should it be an md instead of JSON?
    fs.writeFile(`${answers.projectName}.json`, JSON.stringify(answers, null, 2), err => {
        if (err) {
            console.log(err);
            throw new Error(err);
        }
        console.log('successfully created README file');

    });
});

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
    }
    console.log('successfully created README file');
});
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();*/
