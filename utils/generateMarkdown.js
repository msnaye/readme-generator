// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents  

[Description](#Description)
[Istallation](#Installation)
[License](#License)
[Contributors](#Contributors)
[Usage](#Usage)
[Test](#Test)
[Repository](#Repository) 
  
## Description
${data.description}

## Installation
${data.description}

## license
${data.license}

## contributors
${data.contributors}

## usage
${data.usage}

## tests
${data.test}

## username
${data.username}

## repository
${data.repository}


`;
}

module.exports = generateMarkdown;
