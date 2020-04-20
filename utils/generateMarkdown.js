function generateMarkdown(data,badge) {
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
${badge}

## Contributing

${data.contributor}

## Tests

${data.tests}

## Questions

Please contact me for any questions related to the application through the email below:

Github username: ${data.username}

Github Email: <${data.email}>

`;
}

module.exports = generateMarkdown;
