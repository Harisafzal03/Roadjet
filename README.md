# Road Jet

**Road Jet** is a web application that allows users to check flight information. The project utilizes Firestore for managing flight data.

## Features

- **Flight Information**: View detailed flight information from Firestore.
- **Search and Filter**: Easily search and filter flights based on various criteria.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Firestore**: Database for managing and storing flight data.
- **Tailwind CSS**: Styling framework for building responsive and modern designs.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Harisafzal03/road-jet.git
2. **Navigate to the Project Directory**

   ```bash
   cd road-jet
3. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
3. **Add Firebase Configuration to Your Project**

   - Create a `firebase-config.js` file in the `src` directory of your project.
   - Add your Firebase configuration to this file. You can get your Firebase configuration from the Firebase Console under Project Settings.

   ```javascript
   // src/firebase-config.js
   import firebase from 'firebase/app';
   import 'firebase/firestore';

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   // Export Firestore instance
   const firestore = firebase.firestore();
   export { firestore };

5. **Set Up Firestore**
- To run the development server, use:
   ```bash
   npm start
   # or
   yarn start
- This will start the application and open it in your default web browser.

5. **Building the Project**
- To build the project for production, use:

   ```bash
   npm run build
   # or
   yarn build
- The build output will be in the build directory. You can deploy this to your preferred hosting service.