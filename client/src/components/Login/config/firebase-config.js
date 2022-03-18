import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB8eShy_wWRfGWBY7lR4kXTnBggB6frSuk',
  authDomain: "authentication-github.firebaseapp.com",
  projectId: "authentication-github",
  storageBucket: "authentication-github.appspot.com",
  messagingSenderId: "773126836251",
  appId: "1:773126836251:web:4a411bc95b1eacdfc268be",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);