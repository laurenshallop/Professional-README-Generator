// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  ## title 
  ${answers.title}

  ## description
  ${answers.description}

  ## Table of Contents
  1.[instillation] (#instillation)
  2.[usage] (#usage)
  3.[license] (#license)
  4.[contributions] (#contributions)
  5.[tests] (#tests)
  6.[questions] (#questions)

  ## instillation
  ${answers.instillation}

  ## usage
  ${answers.usage}

  ## license
  ${answers.license}

  ## contributions
  ${answers.contributions}

  ## tests
  ${answers.tests}

  ## questions
  ${answers.questions}
  ${answers.github}
  ${answers.email}


`;
}

module.exports = {generateMarkdown};
