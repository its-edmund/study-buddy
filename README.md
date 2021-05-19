# Study Buddy

Study Buddy is a simple flashcard system that allows you to add question and answer pairs that are displayed as cards. All of the cards are displayed on one main page and the answers can be revealed by clicking on the card. Cards can also be edited and deleted.

## Project Status

The project is still being developed. Here are future implementations I would like to add:
- [x] Use local storage rather than a database so people can keep their own copies
- [ ] Authentication to save personal list
- [ ] Dark mode
- [ ] Different format for questions and answers

## About
This project uses the standard MERN stack along with these libraries:
- [Chakra UI](https://chakra-ui.com)
- [React-Card-Flip](https://www.npmjs.com/package/react-card-flip)

## Usage
Visit <https://quizlet-clone.netlify.app> to use the application. The application uses local storage to store your data.

## Development
Clone this repository. This project uses `yarn` so it must be installed before you can run this project.

***IMPORTANT:*** If you want to develop your own version or run a local copy, you will need to create your own MongoDB database and replace [this](https://github.com/mxinburritos/quizlet-clone/blob/main/server/index.js#L31) in your code with your own database link. It also uses the `MONGODB_PASSWORD` environment variable which you will need to add with your own password. If you need help, you can contact me at <mxin@gatech.edu>.

### Installation:

Packages must be installed for both `server` and `client` so make sure to run `yarn` in both directories.

### Start server:

Change directory into `client` and run `yarn start`. This command should run both the frontend and backend.

### Visit app:

Starting the server should automatically open the correct url but the app will be on `http://localhost:3000`.
