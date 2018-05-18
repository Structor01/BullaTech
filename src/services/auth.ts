import firebase from 'firebase';

export class AuthService {
    authsignup(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    authsignin(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    authlogout() {
        firebase.auth().signOut();
    }
}
