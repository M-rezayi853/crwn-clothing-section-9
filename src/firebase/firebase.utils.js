import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAYae-lLAjCiyBRtWBDSBJbjo-CwqOnsAk",
    authDomain: "crwn-db-2391e.firebaseapp.com",
    databaseURL: "https://crwn-db-2391e.firebaseio.com",
    projectId: "crwn-db-2391e",
    storageBucket: "crwn-db-2391e.appspot.com",
    messagingSenderId: "205601994552",
    appId: "1:205601994552:web:64994ef3216cf6978c73cd",
    measurementId: "G-5PE2F4EYZH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    // console.log(snapShot);

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
