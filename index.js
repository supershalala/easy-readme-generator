const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input


inquirer
.prompt([

   { type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    },





])
.then( (answers) => {
    const readmeContent = 
`
# ${answers.title}

`;


    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) throw err;
        console.log('README file generated successfully!');
      });
      
    
});

// TODO: Create a function to write README file


// TODO: Create a function to initialize app


// Function call to initialize app

