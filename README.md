# Index Checker AppScript for Google Sheets

The Index Checker AppScript is a tool designed to help SEO professionals, website managers, and digital marketers to check if a page is indexed by Google Search Engine Results Pages (SERPs) or not. The application uses Google AppScript to turn this functionality into a custom formula that you can use directly within Google Sheets.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Files](#files)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use this application, follow the steps below:

1. Open your Google Sheets document.
2. Click on `Extensions` > `Apps Script`.
3. Delete any code in the script editor and replace it with the contents of `cellformula.js` and `code_main.js` from this repository.
4. Click `File` > `Save` to save the AppScript.

## Usage

Once the AppScript is saved, you can use the `INDEX_CHECK` custom formula to check if a page is indexed in Google SERPs.

The syntax is as follows:
Replace "URL" with the URL of the page you want to check. The function will return `True` if the page is indexed and `False` if it's not.

## Files

- `cellformula.js`: This file contains the main function that performs the index check. It returns a Boolean value based on whether the page is indexed or not.

- `code_main.js`: This file includes the necessary code for interacting with the Google Sheets environment and external API.

## Contributing

Contributions to this project are welcome. If you have an idea to improve this app or find a bug, please open an issue to discuss it or submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
