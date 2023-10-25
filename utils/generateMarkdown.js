// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](https://opensource.org/licenses/${license})`;
  }
  return '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License


This project is licensed under the ${license} license. Click the following link to read more about this license:
${renderLicenseLink(license)}`;
  }
  return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## table of contents
  -[Installation]{#Installation}
  -[Description]{#Description}
  -[Usage]{#Usage}
  -[License]{#License}
  -[Contributing]{#Contributing}
  -[Tests]{#Tests}


  ##Installation
  ${data.Installation}




  ## Description
  ${data.Description}




  ## Usage
  ${data.Usage}




  ## License
  ${data.License}




  ## Contributing
  ${data.Contributing}




  ## Tests
  ${data.Tests}




  ## Contact


  If you have any questions here is my email  ${data.Email_Address}


  If you wana see some of my work at [${data.GitHub_Username}}(https://github.com/${data.GitHub_Username})




`;
}


module.exports = generateMarkdown;