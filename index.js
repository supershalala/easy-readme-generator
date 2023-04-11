const inquirer = require("inquirer");
const fs = require("fs");
const { type } = require("os");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const licenseChoices = [
  { name: "MIT", value: "mit" },
  { name: "Apache 2.0", value: "apache-2.0" },
  { name: "GNU GPL v3", value: "gpl-3.0" },
  { name: "ISC", value: "isc" },
  { name: "None", value: "none" },
];

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },

    {
      type: "input",
      name: "motivation",
      message: "What was the motivation behind this project?",
    },
    {
      type: "input",
      name: "why",
      message: "Why did you build this project?",
    },

    {
      type: "input",
      name: "problem",
      message: "What problem deos it solve?",
    },

    {
      type: "input",
      name: "learnings",
      message: "What did you learn from this project?",
    },

    {
      type: "list",
      name: "license",
      message: "Choose a license for your project:",
      choices: licenseChoices,
    },

    {
      type: "list",
      name: "installation",
      message: " installation instructions - Select an option:",
      choices: [
        "Code editor (e.g. Visual Studio Code) Modern web browser (e.g. Google Chrome, Mozilla Firefox)",

        new inquirer.Separator(),
        "Other",
      ],
      default: "Option A",
    },
    {
      type: "input",
      name: "otherInstallation",
      message: "Enter your custom option:",
      when: (answers) => answers.installation === "Other",
    },

    {
      type: 'input',
      name: 'image',
      message: 'Enter the URL of the image you want to include in your README:',
    },

    {
      type: "list",
      name: "contribution",
      message: " Contribution instructions - Select an option:",
      choices: [
        `
        ### To contribute to our project, please follow these steps:

        - Fork the repository and create a new branch for your changes.
        - Make your changes and commit them to your branch.
        - Push your changes to your forked repository.
        - Submit a pull request to our repository.
        - Please provide a clear and descriptive title for your pull request, along with a detailed description of the changes you have made. We also ask that you include any relevant tests or documentation updates with your changes.
        `,

        new inquirer.Separator(),
        "Other",
      ],
      default: "Option A",
    },
    {
      type: "input",
      name: "otherContribution",
      message: "Enter your custom contribution option:",
      when: (answers) => answers.contribution === "Other",
    },

    {
      type: 'input',
      name: 'image',
      message: 'Enter the URL of the image you want to include in your README:',
    },



  ])
  .then((answers) => {
    let licenseBadge;

    if (answers.license !== "none") {
      const licenseEncoded = encodeURIComponent(answers.license);
      licenseBadge = `![License](https://img.shields.io/badge/License-${licenseEncoded}-green.svg)`;
    } else {
      licenseBadge = "";
    }

    const installationInstructions =
      answers.installation === "Other"
        ? answers.otherInstallation
        : answers.installation;


    const contributionInstructions =
    answers.contribution === "Other"
      ? answers.otherContribution
      : answers.contribution;

    const readmeContent = `

${licenseBadge}

# ${answers.title}




## Description

- ${answers.motivation}
- ${answers.why}
- ${answers.problem}
- ${answers.learnings}



## Table of contents:

- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [tests](#Tests)
- [License](#License)
- [Questions](#Questions)

## Installation

- ${installationInstructions}

## Usage

# Screenshot 

${answers.image}



## Contributing

${contributionInstructions}

## Tests

## License

This project is licensed under the ${answers.license} license.


## Questions

`;

    fs.writeFile("README.md", readmeContent, (err) => {
      if (err) throw err;
      console.log("README file generated successfully!");
    });
  });

// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app
