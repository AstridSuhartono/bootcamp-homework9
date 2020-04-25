function generateMarkdown(data,badge) {
  return `
# ${data.title}

## Project Description

${data.description}

## Table of Contents

The following are the contents list of the readme file:

* [Project Description](#project-description)
* [Table of Contents](#table-of-contents)
* [Project Version](#project-version)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Project Version

Current project version: ${data.version}

## Installation

How to get the application installed.

${data.installation}

## Usage

Step/s to run the application:

${data.usage}

## License

This project is under ${data.license} for licensing.

${badge}

## Contributing

${data.contribute}

## Tests

${data.test}

## Questions

Please contact me for any questions related to the application through the information below:

Github username: ${data.username}

Github Email: <${data.email}>

`;
}

module.exports = generateMarkdown;
