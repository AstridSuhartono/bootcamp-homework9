function generateMarkdown(data,badge) {
  return `
# ${data.title}

## Project Description

${data.description}

## Table of Contents

* Project Description
* Table of Contents
* Project Version
* Installation
* Usage
* License
* Contributing
* Tests
* Questions

## Project Version

${data.version}

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

${badge}

## Contributing

${data.contribute}

## Tests

${data.test}

## Questions

Please contact me for any questions related to the application through the email below:

Github username: ${data.username}

Github Email: <${data.email}>

`;
}

module.exports = generateMarkdown;
