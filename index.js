
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

const questions = [
    'what is your name?',
    'what is your Github username?',
    'what is your email address?',
    'what is the name of your project?',
    'please provide a short description of your project:',
    'what kind of license does your project have?',
    'please provide a link to your project repo:',
    'please enter any installation instructions:',
    'please enter any usage information:',
    'please enter any contributing information:',
    'please enter any testing instructions:',
    'please enter the link to your deployed app or website, if applicable.'
];


const licenseArray = [
    'Shield',
    'MIT',
    'Apache-2.0',
    'BSD-2-Clause',
    'BSD-3-Clause',
    'CC',
    'UniLicense',
    'none'
];


var fileContent;


inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: questions[0],
        },
        {
            name: 'github',
            type: 'input',
            message: questions[1],
        },
        {
            name: 'email',
            type: 'input',
            message: questions[2],
        },
        {
            name: 'title',
            type: 'input',
            message: questions[3],
        },
        {
            name: 'description',
            type: 'input',
            message: questions[4],
        },
        {
            name: 'license',
            type: 'list',
            message: questions[5],
            choices: licenseArray,
            default: 'none'
        },
        {
            name: 'repo',
            type: 'input',
            message: questions[6],
        },
        {
            name: 'install',
            type: 'input',
            message: questions[7],
        },
        {
            name: 'usage',
            type: 'input',
            message: questions[8],
        },
        {
            name: 'contribute',
            type: 'input',
            message: questions[9],
        },
        {
            name: 'testing',
            type: 'input',
            message: questions[10],
        },
        {
            name: 'url',
            type: 'input',
            message: questions[11],
        },
    ])

    .then((data) => {
        fileContent = generateMarkdown(data);
        writeToFile('README.md', fileContent)
    });


function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('readme generated'));

}


function init() { }


init();
