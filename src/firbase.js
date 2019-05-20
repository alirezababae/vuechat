import {initializeApp} from 'firebase';

const app = initializeApp({

  apiKey: "AIzaSyCyS0900Tg1dpOeohnZ-jRY-X8qCzdMdNo",
  authDomain: "firbasevue.firebaseapp.com",
  databaseURL: "https://firbasevue.firebaseio.com",
  projectId: "firbasevue",
  storageBucket: "firbasevue.appspot.com",
  messagingSenderId: "1041110601957",
  appId: "1:1041110601957:web:84892b87b409f009"
});

export const db = app.database();
export const namesRef = db.ref('names');
