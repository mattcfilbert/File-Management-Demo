# File Manager Demo

## Constraints

- Make a fully responsive, secure, performant, and accessible file management system in under 4 hours while rewatching Wheel of Time in the background (I wasn't totally old at first, but episode 6 really turned me around and made me more appreicate the ones that came before it, but I digress)
- Strictly limit the tools you can use (e.g. no component libraries)

## Tools Used

- Font Awesome for icons
- React Testing Library for testing
- Create React App for spinning up application (more info below)

## With more time...

- Further review accessibility (was considering an aria live region, but decided against due to inputs being updated within)
- Test JSON sanitization utils
- Invest more time into responsive design (e.g. deeper dive into views beyond mobile and laptop/tablet)
- Likely revisted the check management logic and moved the Action Bar into its own component (single responsibility principle)

## With more tools...

- Would leverage component library (e.g. for better looking checkbox) - this could also have been prioritized with more time
- May have leveraged a layout tool, though switching from grid to flex appears to provide a solid output for both mobile and non-mobile users

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
