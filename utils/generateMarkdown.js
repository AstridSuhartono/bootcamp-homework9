function generateMarkdown(data) {
  return `
# ${data.title}

## Project Description

${data.description}

## Table of Contents

${data.contents}

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}
## License
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)]
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)  

## Contributing

${data.contributor}

## Tests

${data.tests}

## Questions

Please contact me for any questions related to the application through the email below:

![GitHub profile picture](${data.picture})

Github username: ${data.username}

Github Email: <${data.email}>

`;
}

module.exports = generateMarkdown;
