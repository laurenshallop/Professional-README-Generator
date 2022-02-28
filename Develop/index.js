// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


const questions = [
    
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of the project?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Enter a title to continue');
                return false;
            }
        }
    },
    
    {
        name: 'description',
        type: 'input',
        message: 'Enter a description of the project',
        validate: your_description => {
            if (your_description) {
                return true;
            } else {
                console.log('Enter a project description');
                return false;
            }
        }
    },
    
    {
        name: 'instillation',
        type: 'input',
        message: 'Enter instillation instructions',
        validate: your_instillation => {
            if (your_instillation) {
                return true;
            } else {
                console.log('Enter instillation for your project');
                return false;
            }
        }
    },
    
    {
        name: 'usage',
        type: 'input',
        message: 'How do you use this project?',
        validate: your_usage => {
            if (your_usage) {
                return true;
            } else {
                console.log('Enter the information for your project');
                return false;
            }  
        }
    },
    
    {
        name: 'contributions',
        type: 'input',
        message: 'Enter contribution guidelines',
        validate: your_contributions => {
            if (your_contributions) {
                return true;
            } else {
                console.log('Provide information on how to contribute to the project');
                return false;
            }  
        }
    },
    
    {
        name: 'test',
        type: 'input',
        message: 'Enter test instructions for the user',
        validate: your_test => {
            if (your_test) {
                return true;
            } else {
                console.log('Explain how to test this project');
                return false;
            }  
        }
    },
    
    {
        type: 'list',
        message: 'Choose a license for your project',
        choices: ['GNU', 'MPL 2.0', 'Apache', 'MIT', 'None of the above'],
        name: 'license',
        validate: your_license => {
            if (your_license) {
                return true;
            } else {
                console.log('Selecet a license for the project');
                return false;
            }  
        }
    },{
        type: 'input',
        name: 'githhub',
        message: 'Enter your Github username (Required)',
        validate: github_input => {
            if (github_input ) {
                return true;
            } else {
                console.log('Enter your Github username');
                return false;
            }  
        }
    },{
        type: 'input',
        message: 'Enter your E-mail address',
        name: 'email',
        validate: email_input => {
            if (email_input ) {
                return true;
            } else {
                console.log('Enter your email');
                return false;
            }  
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
    }
    console.log('successfully created README file');
});
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
 







/* ]).then(answers => {
    writeToFile(answers)
    console.log('successfully created README file')
}).catch((err) => console.error(err));

};

const writeToFile = answers => {
    writeFileAsync('README.md', generateMarkdown(answers))
}

promptUser();


   Should it be an md instead of JSON?
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
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
    }
    console.log('successfully created README file');
});
};



*/
