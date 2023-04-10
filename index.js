const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os'); 
const badgen = require('badgen').default;




// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const licenseChoices = [
    { name: 'MIT', value: 'mit' },
    { name: 'Apache 2.0', value: 'apache-2.0' },
    { name: 'GNU GPL v3', value: 'gpl-3.0' },
    { name: 'ISC', value: 'isc' },
    { name: 'None', value: 'none' },
  ];


inquirer
.prompt([

   { type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Briefly describe what you have built this project',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: licenseChoices,
      },



])
.then( (answers) =>{


    let licenseBadge;

    if (answers.license !== 'none') {
      const licenseEncoded = encodeURIComponent(answers.license);
      licenseBadge = `![License](https://img.shields.io/badge/License-${licenseEncoded}-green.svg)`;
    } else {
      licenseBadge = '';
    }


    const readmeContent = 
`
# ${answers.title}

${licenseBadge}


## Description

${answers.description}

## Table of contents:

- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [License](#License)
- [Questions](#Questions)

## Installation

## Usage

## Contributing

## Tests

## License

This project is licensed under the ${answers.license} license.


## Questions

`;





    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) throw err;
        console.log('README file generated successfully!');
      });
      
    
});

// TODO: Create a function to write README file


// TODO: Create a function to initialize app


// Function call to initialize app

