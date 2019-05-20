import {initializeApp} from 'firebase';

const app = initializeApp({
/* Go to the firebase.com site and create an account and get the following additional information */
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "firbasevue",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

export const db = app.database();
export const namesRef = db.ref('names');
