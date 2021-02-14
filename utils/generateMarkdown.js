function renderLicenseBadge(license) {

  if (license != 'none') {

    return `![License Badge](https://img.shields.io/badge/license-${license}-green)`

  } else {
    return ''
  }

}

function renderLicenseLink(license) {

  if (license != 'none') {

    return `* [license](#license)`

  } else {
    return ''
  }

}

function renderLicenseSection(license) {


  if (license != 'none') {

    return `#### license
    
    this project is licensed for use by ${license}.`

  } else {
    return ''
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## table-of-contents

* [description](#description)
* [installaion](#installation)
* [usage](#usage)
* [contribute](#contribute)
* [testing](#testing)
* [questions](#questions)
${renderLicenseLink(data.license)}

## description

${data.description}

## installation

${data.install}

### usage

${data.usage}

## contribute

${data.contribute}

### testing

${data.testing}

### questions

for additional questions, please contact ${data.name} on github at the following link: [${data.github}](https://github.com/${data.github}).

you may also contact me via email at ${data.email}

github repo: ${data.repo}

deployed link: [${data.title}](${data.url})

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
