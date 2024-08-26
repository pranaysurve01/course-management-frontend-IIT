<<<<<<< HEAD
# course-management-frontend-IIT

Note on Frontend and Backend Application :-

Overview :-
The application includes a Spring Boot backend and a React frontend. The backend handles course and course instance management via RESTful APIs, while the frontend provides a user interface for interacting with these APIs.

Features: :-
1. Spring Boot Backend :-
   - Manages "Course" and "CourseInstance" entities.
   - Provides CRUD APIs for courses and instances.
   - Utilizes MySQL for storage.
   - Dockerized for easy deployment.

2. React Frontend :-
   - User-friendly interface for managing course data.
   - Includes forms for adding courses and instances.
   - Lists and searches courses and instances.
   - Dockerized and successfully pushed to DockerHub.

Issues Faced :-

1. Internal Server Errors :-
   - Inconsistent 500 errors in the backend, sometimes self-resolving.
   - Likely causes include database misconfigurations and Docker-related issues.
   - Attempts to fix included retry logic and adjusting `docker-compose.yaml` for proper startup order.

2. Container Problems :-
   - Startup Order: Backend sometimes tries to connect to MySQL before it's ready, resolved by adjusting `docker-compose.yaml`.
   - Connectivity Issues: Occasional network errors between containers, mitigated with better Docker networking setups.
   - Version Mismatch: The backend container wasn’t pushed to DockerHub due to version mismatches, leaving it local, while the frontend container is available on DockerHub.

Current Status :-
The application generally works well, though occasional internal server errors need monitoring. The frontend container is on DockerHub, but the backend remains local due to version mismatches.
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> d0021ed (Initial commit)
