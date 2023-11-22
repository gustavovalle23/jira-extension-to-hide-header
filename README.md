# Jira Element Remover Chrome Extension

## Overview

This Chrome extension allows you to remove a specific HTML element with the class `_1yt4zdiv` from web pages. The extension provides a retry mechanism to attempt removal multiple times, waiting for 2 seconds between each attempt.

## Installation

1. Clone or download this repository to your local machine.

2. Open Google Chrome and go to `chrome://extensions/`.

3. Enable "Developer mode" in the top right corner.

4. Click on "Load unpacked" and select the directory where you cloned/downloaded this repository.

5. The extension icon will appear in the Chrome toolbar.

## Usage

1. Click on the extension icon.

2. The extension will execute on web pages where the URL contains 'jira/software/projects/'.

3. The extension will attempt to remove the element with the class `_1yt4zdiv` every 2 seconds

## Configuration

If you need to modify the target element class or adjust the retry settings, you can do so in the `content.js` file.

## Issues and Contributions

If you encounter any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.
