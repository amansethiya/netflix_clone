import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { EmailAuthProvider } from "firebase/auth/web-extension";

const firebaseConfig = {
  apiKey: "AIzaSyDx97a55x9DJuJUkgGyTLne7edO580KdXs",
  authDomain: "netflix-clone-11d2f.firebaseapp.com",
  projectId: "netflix-clone-11d2f",
  storageBucket: "netflix-clone-11d2f.firebasestorage.app",
  messagingSenderId: "158959894646",
  appId: "1:158959894646:web:41412f05a842b6468adf57",
  measurementId: "G-9F33L1ML3P",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
