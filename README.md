# This project is mainly written through AI interactions using chatGPT. 

# link to conversation

https://chat.openai.com/c/766ecf4e-6307-4bf0-b167-2e3f25d4f6d6

# Intro

I am trying to direct chatGpt to write me the code I want by typing very specific directions/questions.

Usually, it will be able to fix things I ask it to. Sometimes, the code produces and error. At that point, I will show the AI the error I recieived, and hope they can find me a better solution or a way to fix it. 

This is the conversation with the bot. 

Starting on September 17th, I asked it to create me a simple react act, and then components with a specific style/ui.

# Conversation

Default (GPT-3.5)
User
can you help me build a simple javascript app from start? I would like to use the newest version of React.js please. I would also like if this app was easy to modify and add features to.
ChatGPT

Of course, I can help you get started with building a simple React.js app. React is a popular JavaScript library for building user interfaces, and it's designed to be modular and easy to extend, making it a great choice for creating apps that are easy to modify and add features to.

Before we begin, make sure you have Node.js and npm (Node Package Manager) installed on your computer. If you haven't already installed them, you can download them from the official website: https://nodejs.org/

Now, let's create a new React app from scratch. We'll use the create-react-app tool, which is a convenient way to set up a new React project with all the necessary dependencies and a basic project structure. Open your terminal and run the following command:

bash

npx create-react-app simple-react-app

This will create a new React app named simple-react-app in a directory with the same name. Once the installation is complete, navigate to your project folder:

bash

cd simple-react-app

Now, let's start the development server:

bash

npm start

This command will start a development server and open your app in a web browser. You can now edit the source code, and any changes you make will be automatically reflected in the browser.

Let's create a simple example. Open the src/App.js file in your project directory and replace its contents with the following:

jsx

import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>This is a simple React app.</p>
    </div>
  );
}

export default App;

Save the file, and you should see your changes reflected in the browser. You've just created a basic React component!

To add more features and modify your app, you can create additional components, import them into App.js, and compose your app as needed. React's modular structure makes it easy to manage complex apps.

For example, you can create a new component in the src directory, let's call it MyComponent.js:

jsx

import React from 'react';

function MyComponent() {
  return (
    <div>
      <h2>This is My Component</h2>
      <p>You can modify and add features to this component.</p>
    </div>
  );
}

export default MyComponent;

Now, you can import and use this component in your App.js file:

jsx

import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>This is a simple React app.</p>
      <MyComponent />
    </div>
  );
}

export default App;

With this basic setup, you can start building and extending your React app by creating new components, managing state, and handling user interactions as needed. React's official documentation (https://reactjs.org/docs/getting-started.html) is a great resource for learning more about React and its capabilities.

Feel free to ask if you have any specific questions or if you'd like assistance with any specific features or modifications to your app!
User
Can you help me make some additions to my app now? I would like to make a component that is essentially a contact card with a form that can be finalized later. 
ChatGPT

Certainly! Let's create a ContactCard component with a basic form that users can fill out. We'll start by creating the ContactCard component and then integrate it into your existing app.

    Create a new file named ContactCard.js in your src directory:

jsx

import React, { useState } from 'react';

function ContactCard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can finalize what to do with the form data here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="contact-card">
      <h2>Contact Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ContactCard;

In this code:

    We've created a functional component called ContactCard that maintains form data in the formData state using the useState hook.
    The handleChange function updates the state when the user types into the form fields.
    The handleSubmit function is called when the user submits the form. For now, it logs the form data to the console, but you can replace this with your desired functionality later.

    Now, import and use the ContactCard component in your src/App.js:

jsx

import React from 'react';
import MyComponent from './MyComponent';
import ContactCard from './ContactCard'; // Import the ContactCard component

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>This is a simple React app.</p>
      <MyComponent />
      <ContactCard /> {/* Add the ContactCard component here */}
    </div>
  );
}

export default App;

    Start your development server if it's not already running:

bash

npm start

Now, when you open your app in the browser, you should see the "Contact Information" section with a form where users can enter their name, email, and phone number. When the user submits the form, the form data will be logged to the console for now, but you can customize the form submission logic to suit your needs.

Feel free to style and further enhance the ContactCard component and integrate it into your app as required. If you have any specific modifications or questions, please let me know!
User
Thanks. Can you add a few things to the form in the contact card? Can you please the following fields: Favorite color, Hobbies,
ChatGPT

Certainly! Let's add the "Favorite Color" and "Hobbies" fields to the ContactCard form.

    Open the ContactCard.js file in your project.

    Modify the ContactCard component to include the new fields:

jsx

import React, { useState } from 'react';

function ContactCard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    favoriteColor: '', // New field
    hobbies: '', // New field

User
I messed up that last sentence. Can you fix and update the following for me please? Can you add a few things to the form in the contact card? Can you please the following fields: Favorite Color/s, Hobbies, Sports Team 1, Sports Team 2, A drop down with the options Relative, Friend, Spouse, Partner, Children.
ChatGPT

Of course! Let's add the new fields to the ContactCard form:

    Open the ContactCard.js file in your project.

    Modify the ContactCard component to include the new fields and the drop-down with options:

jsx

import React, { useState } from 'react';

function ContactCard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    favoriteColor: '',
    hobbies: '',
    sportsTeam1: '', // New field
    sportsTeam2: '', // New field
    relationship: 'Relative', // New field with default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can finalize what to do with the form data here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="contact-card">
      <h2>Contact Information</h2>
      <form onSubmit={handleSubmit}>
        {/* ... Previous form fields */}
        
        {/* New fields */}
        <div className="form-group">
          <label htmlFor="favoriteColor">Favorite Color:</label>
          <input
            type="text"
            id="favoriteColor"
            name="favoriteColor"
            value={formData.favoriteColor}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hobbies">Hobbies:</label>
          <input
            type="text"
            id="hobbies"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sportsTeam1">Sports Team 1:</label>
          <input
            type="text"
            id="sportsTeam1"
            name="sportsTeam1"
            value={formData.sportsTeam1}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sportsTeam2">Sports Team 2:</label>
          <input
            type="text"
            id="sportsTeam2"
            name="sportsTeam2"
            value={formData.sportsTeam2}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="relationship">Relationship:</label>
          <select
            id="relationship"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
          >
            <option value="Relative">Relative</option>
            <option value="Friend">Friend</option>
            <option value="Spouse">Spouse</option>
            <option value="Partner">Partner</option>
            <option value="Children">Children</option>
          </select>
        </div>
        
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ContactCard;

Now, the ContactCard component includes fields for "Favorite Color," "Hobbies," "Sports Team 1," "Sports Team 2," and a drop-down menu for selecting the relationship. Users can enter data into these fields, and when they submit the form, the data will be available in the formData object. You can further customize the handling of this data as needed for your application.
User
Can you style my app for me? Please make it styled  similar to how Material UI looks, but with a nice mint green accent.
ChatGPT

Sure, I can help you style your app with a Material UI-inspired look and a mint green accent color. To achieve this, you can use the Material-UI library for styling your components, and you can customize the theme to use the desired mint green color.

Here's how you can style your app:

    Install Material-UI and its dependencies:

    You can install Material-UI and its dependencies using npm:

    bash

npm install @mui/material @mui/icons-material @mui/styles

Create a custom theme:

In your src directory, create a new file called theme.js. This file will contain your custom Material-UI theme.

jsx

// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00BFA5', // Mint green as the primary color
    },
  },
});

export default theme;

Wrap your app with the custom theme:

In your src/index.js file, import the custom theme and wrap your App component with the ThemeProvider from Material-UI:

jsx

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme'; // Import the custom theme
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

Style your components:

You can style your components using Material-UI's styling solution. For example, let's add styles to the ContactCard component in your ContactCard.js file:

jsx

    // ContactCard.js
    import React, { useState } from 'react';
    import { makeStyles } from '@mui/styles';

    const useStyles = makeStyles((theme) => ({
      contactCard: {
        padding: theme.spacing(2),
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: theme.shape.borderRadius,
        marginBottom: theme.spacing(2),
      },
      // Add more styles here as needed
    }));

    function ContactCard() {
      const classes = useStyles();

      // ... Rest of your ContactCard component

      return (
        <div className={classes.contactCard}>
          {/* ... The rest of your ContactCard JSX */}
        </div>
      );
    }

    export default ContactCard;

    You can create a useStyles function with makeStyles to define your component's styles and apply them to the relevant elements within your component.

    Apply Material-UI styles to other components as needed:

    You can similarly use makeStyles and the custom theme in other components to style them according to the Material-UI-inspired design.

With these steps, your app should have a Material-UI-inspired look with a mint green accent color. You can customize the styles further according to your preferences by adjusting the styles in the makeStyles function in your components.

Feel free to adapt these styles to your specific needs and extend them to other components in your app.
User
I tried that, but got this error: npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: simple-app@0.1.0
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   react@"^18.2.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^17.0.0" from @mui/styles@5.14.9
npm ERR! node_modules/@mui/styles
npm ERR!   @mui/styles@"*" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR!
npm ERR! For a full report see:
npm ERR! C:\Users\cerpi\AppData\Local\npm-cache\_logs\2023-09-18T01_24_03_130Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in: C:\Users\cerpi\AppData\Local\npm-cache\_logs\2023-09-18T01_24_03_130Z-debug-0.log
ChatGPT

The error message you encountered indicates a dependency resolution issue with the version of React being used in your project. The @mui/styles package is expecting React version 17, but your project seems to be using React version 18. This discrepancy is causing the error.

To resolve this issue, you can try one of the following approaches:

    Downgrade React to version 17:

    You can downgrade React to version 17, which is compatible with @mui/styles. To do this, run the following command:

    bash

npm install react@17 react-dom@17

This will install React and React DOM version 17. After that, try running your app again.

Update Material-UI to version 5:

As of my last knowledge update in September 2021, Material-UI version 5 was in development and may have been released by now. Version 5 should be compatible with React 18.

To update Material-UI to version 5, you can run:

bash

npm install @mui/material@^5.0.0 @mui/icons-material@^5.0.0 @mui/styles@^5.0.0

This will install the latest version of Material-UI. Make sure to check the official Material-UI documentation or release notes for any breaking changes or migration steps if needed.

Use --force or --legacy-peer-deps (not recommended):

As suggested in the error message, you can try running the npm install command with the --force or --legacy-peer-deps flag. However, this is not recommended unless you have no other option because it may lead to potential compatibility issues or runtime errors.

bash

npm install --force

or

bash

    npm install --legacy-peer-deps

    After running one of these commands, test your app to see if it works without any issues. If you choose this option, be cautious and consider the potential consequences.

Please choose one of the above approaches based on your project's requirements and compatibility constraints. Updating Material-UI to the latest version (option 2) is generally recommended if it's available, as it ensures better compatibility and access to the latest features and improvements.
User
Can you undo that Material UI bit? INstead, give me a UI primarily built using CSS. Please have this CSS style resembe MAterial Ui

ChatGPT

Certainly! If you'd like to create a Material UI-inspired UI primarily using CSS without relying on the Material-UI library, you can define your custom CSS styles to achieve the desired look. Here's a basic example of how you can style your app to resemble Material UI:

    Create a CSS file:

    In your project's src directory, create a new CSS file, for example, App.css.

    Define the custom CSS styles:

    In your App.css file, you can define the custom styles for your components. Here's an example of how you can style your components to have a Material UI-inspired look with a mint green accent color:

    css

/* App.css */

/* Define the mint green accent color */
:root {
  --mint-green: #00BFA5;
}

/* Style the ContactCard */
.contact-card {
  border: 1px solid var(--mint-green);
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

/* Style the form elements */
.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 4px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: var(--mint-green);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #009b85;
}

/* Add more styles as needed */

Import the CSS file:

In your src/App.js file, import the App.css file to apply the custom styles:

jsx

    // src/App.js
    import React from 'react';
    import MyComponent from './MyComponent';
    import ContactCard from './ContactCard';
    import './App.css'; // Import the custom CSS file

    function App() {
      return (
        <div className="App">
          <h1>Hello, React!</h1>
          <p>This is a simple React app.</p>
          <MyComponent />
          <ContactCard />
        </div>
      );
    }

    export default App;

With these custom CSS styles, your app should have a Material UI-inspired look with a mint green accent color. You can further customize and extend the styles in your CSS file to match your design preferences. This approach allows you to achieve the desired UI style without relying on the Material-UI library.
User
I will continue with this tomorrow. THanks so far for the help.
ChatGPT

You're welcome! If you have any more questions or need further assistance in the future, feel free to reach out. Good luck with your project, and have a great day!
User
I wonder if this will stay when I sleep the PC? If so I want to do the following: Make a user login page as the very first part of the website you see, in the form of a model. Inside of this login model, please include the User and Password fields, as well as Forgot User and Forgot Password options. Forgot User and Forgot Password will be links to their own unique components that handle helping users located their user names or their passwords.
ChatGPT

Whether your development environment stays running when your PC goes to sleep depends on your system settings. In most cases, when your PC goes to sleep, your development server (e.g., the React development server started with npm start) will pause, and you'll need to restart it when you wake your PC. However, your code and changes in your project files will be preserved.

Now, let's proceed with creating a user login page and the associated "Forgot User" and "Forgot Password" options as modal components in your React app.

    Create the User Login Modal Component:

    First, let's create a new component for the user login modal. You can create a file named UserLoginModal.js in your src directory.

    jsx

// UserLoginModal.js
import React from 'react';

function UserLoginModal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="modal-options">
            <a href="#">Forgot User</a>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default UserLoginModal;

Style the User Login Modal:

You can create CSS styles to make the modal appear and style it as you want. For simplicity, you can add a class called "modal" to create a basic modal appearance. You may need to add more CSS styles to make it look as you desire.

Create the "Forgot User" and "Forgot Password" Components:

Similar to the UserLoginModal.js, create separate components for "Forgot User" and "Forgot Password" pages. You can name them ForgotUser.js and ForgotPassword.js, respectively. These components can handle user actions for recovering their usernames or passwords.

You can create routes in your app to navigate to these components when the user clicks the "Forgot User" or "Forgot Password" links in the modal.

Implement Routing:

To navigate between components, you'll need to set up routing in your React app. You can use the react-router-dom library for this purpose.

Install the react-router-dom library if you haven't already:

bash

npm install react-router-dom

Then, you can define routes in your src/App.js file:

jsx

    // src/App.js
    import React from 'react';
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    import UserLoginModal from './UserLoginModal';
    import ForgotUser from './ForgotUser';
    import ForgotPassword from './ForgotPassword';

    function App() {
      return (
        <div className="App">
          <Router>
            <Switch>
              <Route path="/forgot-user" component={ForgotUser} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/" component={UserLoginModal} />
            </Switch>
          </Router>
        </div>
      );
    }

    export default App;

    With this setup, when the user clicks "Forgot User" or "Forgot Password" links in the modal, they will be directed to the respective components.

    Styling and Additional Functionality:

    You can style and enhance the modal and other components as desired. You might want to use CSS frameworks like Bootstrap or Materialize to achieve a polished look. Additionally, you can implement the logic for handling user login and password recovery in your components.

This should give you a starting point for creating a user login page with "Forgot User" and "Forgot Password" options in your React app. You can further expand and customize these components based on your project's requirements.
User
Can you please style the Login Page modal for me? When on mobile devices, can you please have the modal on top of a blurred background, and style it similarly to the way the rest of the app is styled.
ChatGPT

Certainly! To style the Login Page modal with a blurred background on mobile devices and make it consistent with the rest of the app's styling, you can use CSS to achieve this effect. Here's how you can do it:

    Create CSS for the Blurred Background:

    First, create a CSS class to apply a blurred background effect to the entire page. You can use the CSS backdrop-filter property for this purpose. Create a new CSS file or add this code to your existing CSS file:

    css

/* App.css or a separate CSS file */

/* Blurred background for the entire page */
.blurred-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* Semi-transparent background */
  backdrop-filter: blur(5px); /* Adjust the blur intensity as needed */
  z-index: 1000; /* Ensure it's above other content */
}

Update the Login Modal CSS:

Apply styles to the Login Modal to make it consistent with the rest of the app. You can add styles for positioning and responsiveness. Ensure that the modal appears centered on the screen and adjusts its size for mobile devices. Here's an example:

css

/* App.css or a separate CSS file */

/* Style for the Login Modal */
.login-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 80%; /* Adjust the maximum width as needed */
  width: 300px; /* Set a fixed width for larger screens */
  z-index: 1001; /* Ensure it's above the blurred background */
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .login-modal {
    width: 90%; /* Adjust the width for mobile screens */
  }
}

HTML Structure for Blurred Background and Login Modal:

Update your UserLoginModal.js component to include the blurred background and apply the login-modal class to the modal div:

jsx

    // UserLoginModal.js

    function UserLoginModal() {
      return (
        <>
          <div className="blurred-background" />
          <div className="login-modal">
            {/* Modal content */}
            <h2>Login</h2>
            {/* Rest of the modal content */}
          </div>
        </>
      );
    }

With these changes, the blurred-background class will create a blurred overlay behind the modal, and the login-modal class will style the modal itself. The modal will be centered on the screen and responsive on mobile devices.

Remember to adjust the CSS properties (such as the blur intensity and maximum width) to match your desired design preferences. This approach should give you a Material UI-inspired modal with a blurred background for mobile devices while keeping the rest of the styling consistent with your app.
Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 3 Version

# September 18






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

