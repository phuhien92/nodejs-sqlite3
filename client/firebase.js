import firebase from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
    apiKey: "AIzaSyAZ5IR7117AIoPXQhadL619_z0JFZBIoFY",
    authDomain: "nextjs-b37bf.firebaseapp.com",
    databaseURL: "https://nextjs-b37bf.firebaseio.com",
    projectId: "nextjs-b37bf",
    storageBucket: "nextjs-b37bf.appspot.com",
    messagingSenderId: "656349642811"
};

const devConfig = {
    apiKey: "AIzaSyAZ5IR7117AIoPXQhadL619_z0JFZBIoFY",
    authDomain: "nextjs-b37bf.firebaseapp.com",
    databaseURL: "https://nextjs-b37bf.firebaseio.com",
    projectId: "nextjs-b37bf",
    storageBucket: "nextjs-b37bf.appspot.com",
    messagingSenderId: "656349642811"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
//auth.setPersistence(firebase.auth.Auth.Persistence.NONE);

export {
    auth
}