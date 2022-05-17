
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![badge](https://img.shields.io/badge/license-${data.license}-red)
![badge](https://img.shields.io/github/last-commit/${data.username}/${data.repository})
![badge](https://img.shields.io/github/issues/${data.username}/${data.repository})
![badge](https://img.shields.io/github/languages/code-size/${data.username}/${data.repository})
![badge](https://img.shields.io/github/directory-file-count/${data.username}/${data.repository})
![badge](https://img.shields.io/github/languages/count/${data.username}/${data.repository})
![badge](https://img.shields.io/github/languages/top/${data.username}/${data.repository})

## Table of Contents  

- [Description](#Description)
- [Installation](#Installation)
- [License](#License)
- [Contributors](#Contributors)
- [Usage](#Usage)
- [Test](#Test)
- [Repository](#Repository) 
  
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
