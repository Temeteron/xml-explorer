# xml-explorer

## Description

A simple project that demonstrates a good structure and best practices for React.

- Objective
  - Let the user upload or drop an XML file into the dropzone area.
  - Read, parse and transform XML to JSON form.
  - Present the XML into a tree view like a file explorer.

- Notes
  - For the dropzone component the 'react-dropzone' lib was used, as it is one of the best and easiest to use.
  - For the tree view the 'react-json-tree' lib was used.
  - An implementation from scratch could be developed for the tree view, but because it wasn't so clear if it was a requirement or not, I chose to give more emphasis at the structure of the project and best practices in react.
  - An easy implementation of a tree view, would be a component with recursion in which based in the depth of each component an extra margin would be applied in the left to match a file explorer UI.

- Implement in the future
  - The UX could change, by adding a text area, so that the user could also paste the content of a xml instead of always uploading it.
  - Add a snackbar service to show possible errors as user feedback (e.g. Wrong file type, invalid xml structure, etc).
  - Add unit tests on functions using Jest, even though currently the size of the project is very small. It would be helpful to have tests when adding new features in the future.
  - Add loading view if the whole process takes too long, because of the size of an XML.

## Install dependencies
```$bash
$ nvm use 16
$ npm i
```

## Run client
```bash
$ npm start
```
