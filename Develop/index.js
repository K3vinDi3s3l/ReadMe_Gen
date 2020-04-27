//import generateMarkdown from "utils/generateMarkdown";
var inquirer = require('inquirer');
var fs = require('fs');
var generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username?'    
    },
    {
        type: 'input',
        name: 'filepath',
        message: 'Please give the file path of your repo (Please use entire path : Default will be current location of this program).',
        default: './'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for the project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide an example/explanation/usage of the project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please pick the type of license (if any).',
        choices: ['GNU GPLv3', 'Apache', 'MIT'],
        default: 'GNU GPLv3'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please provide the contributors to the project (separated by commas).'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any tests for the project (if any).',
        default: 'No Tests.'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide any questions about the project (if any).',
        default: 'No Questions'
    }

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err){
        if (err){
            throw (err);
        }
        console.log('README created!')
    });
}

function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile(`${answers.filepath}/README.md`, answers);
    })

}

init();
