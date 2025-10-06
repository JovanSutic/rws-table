# Legislation bills table

You can run the project with Docker or directly in the browser:

First clone this project, then run npm install to install all dependencies

Use main or develop branches if you wanna run it

- to run with Docker run command: docker-compose -f docker-compose.dev.yml up --build
- to run directly in browser run command: npm run dev

in both cases dev version is running on http://localhost:4173/


Before you run the project you need to setup .env file in the root of your

```js
VITE_API_URL="https://api.oireachtas.ie/v1"
VITE_MOCKS_HANDLING="false"
```

if you are running the project directly in the browser you need to make sure you have Node v20.19+ installed on your machine

if you wanna full mock environment change VITE_MOCKS_HANDLING to true but then your API filtering will be limited
