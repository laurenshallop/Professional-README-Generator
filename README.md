# README

Quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.

User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README



Instructions
- The application will be invoked by using the following command: node index.js
- Generates a professional README.md file from a user's input using the Inquirer package


 # License:
 [![license](https://img.shields.io/badge/license-GNU-blue.svg)](https://shields.io/)
  # Table of Contents
  - [Description](#description)
  - [Instillation](#instillation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Test](#test)
  - [Questions](#questions)
  
  # Description
  challenge

  # Instillation
  npm install

  # Usage
  preview a file

  # License
  GNU

  # Contributions
  email me

  # Test
  npm test

  # Questions
  - Github: [undefined](https://github.com/undefined)
  - Email: [laurenshallop@gmail.com](mailto:user@example.com) 