// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Enter your project title:'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Enter a project description:'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Enter usage information:'
    },
    {
        type: 'list',
        name: 'License',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GNU GPL v3', 'Apache 2.0', 'BSD 3-Clause', 'Other']
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Enter test instructions:'
    },
    {
        type: 'input',
        name: 'GitHub_Username',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'Email_Address',
        message: 'Enter your email address:'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {fs.writeFile(path.join(fileName), data, (err) => {
    if (err) {
        console.error(`Error writing to ${fileName}: ${err}`);
    } else {
        console.log(`Successfully wrote to ${fileName}`);
    }
})


;}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers)
        writeToFile('README.md', generateMarkdown({...answers}))
    })
}


// Function call to initialize app
init();