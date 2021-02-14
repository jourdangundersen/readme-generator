function renderLicenseBadge(license) {

  if (license != 'none') {

    return `![License Badge](https://img.shields.io/badge/license-${license}-green)`

  } else {
    return ''
  }

}

function renderLicenseLink(license) {

  if (license != 'none') {

    return `* [License](#license)`

  } else {
    return ''
  }

}