import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyAM18k5Y1TPrzUsLgJ7TqEETNIesjRcJls",
    authDomain: "todo-app-8f931.firebaseapp.com",
    databaseURL: "https://todo-app-8f931.firebaseio.com",
    projectId: "todo-app-8f931",
    storageBucket: "todo-app-8f931.appspot.com",
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
