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

 # License:
 [![license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/)
  # Table of Contents
  - [Description](#description)
  - [Instillation](#instillation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Test](#test)
  - [Questions](#questions)
  
  # Description
  ${data.description}

  # Instillation
  ${data.instillation}

  # Usage
  ${data.usage}

  # License
  ${data.license}

  # Contributions
  ${data.contributions}

  # Test
  ${data.test}

  # Questions
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:user@example.com) `;
}

module.exports = generateMarkdown;
