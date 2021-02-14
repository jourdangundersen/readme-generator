
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

const questions = [
    'What is your name?',
    'What is your Github username?',
    'What is your email address?',
    'What is the name of your project?',
    'Please provide a short description of your project:',
    'What kind of license does your project have?',
    'Please provide a link to your project repo:',
    'Please enter any installation instructions:',
    'Please enter any usage information:',
    'Please enter any contributing information:',
    'Please enter any testing instructions:',
    'Please enter the link to your deployed app or website, if applicable.'
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


