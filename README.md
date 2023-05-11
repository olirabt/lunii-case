# Lunii case study (olivier rabot)
This project is the implementation of a URL shortening service that utilizes full-stack JavaScript technologies.

## Features
The project contains two separate pages, as well as an API endpoint ("/api/shorturl") allowing to generate a short version of a sent url. The first page is a homepage. This homepage has a link to the second page of the project, the url of this page being "/shorturl". This second page presents the url reduction service. 
A form with a text field allows you to enter a url that you want to reduce. For example, I can enter an url like https://lunii.com/fr-fr/concept-ma-fabrique-a-histoires/" in the input of the form. When the "submit" button is clicked, the url entered is analysed on the front-end to determine its validity. If the url is valid, a request is sent to the endpoint of the api. 
The backend service will perform a validation of the url and send a different response depending on the validity of the url received. An error will be sent if the url received is not valid. Otherwise, the original url and a reduced version will be sent. In the interface of the "/shorturl" page, a success message including the reduced url pointing to the original url is presented to the user in case of success. If the url reduction fails, an error message is displayed.

## Tech
This project uses the following technologies:

- [Nextjs] - React framework 
- [Typescript] - typed programming language
- [tailwind] - css framework
- [Jest and react testing library] - unit testing
- [eslint] - code linter

## Installation and development

lunii-case requires [Node.js](https://nodejs.org/) v18+ to run.

Install lunii-case with npm:
```bash
  cd lunii-case
  npm Install
```

Run the development server:
```bash
  npm run dev
```

Build the project:
```bash
  npm run build
```

Start the project:
```bash
  npm run start
```

Run the tests:
```bash
  npm run test
```

Run the eslint:
```bash
  npm run lint
```

A tailwindcss theme is configured and can be modified via the `tailwind.config.js` file.
