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
function generateMarkdown(data) {
  return `# ${data.title}

 ## license:
 [![license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/)
  ## Table of Contents
  - [description](#description)
  - [instillation](#instillation)
  - [usage](#usage)
  - [license](#license)
  - [contributions](#contributions)
  - [test](#test)
  - [questions](#questions)
  
  ## description:
  ${data.description}

  ## instillation:
  ${data.instillation}

  ## usage:
  ${data.usage}

  ## license:
  ${data.license}

  ## contributions:
  ${data.contributions}

  ## Test:
  ${data.test}

  ## Contact information
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:user@example.com) `;
}

module.exports = generateMarkdown;
