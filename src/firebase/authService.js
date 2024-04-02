import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

async function signInWithEmailPass(signInData) {
  await signInWithEmailAndPassword(auth, signInData.email, signInData.password);
  return signInData.email;
}

async function signInWithGoogle() {
  const credential = await signInWithPopup(auth, new GoogleAuthProvider());
  return credential.user.email;
}

export async function signInFirebase(signInData) {
  return signInData.email === "GOOGLE"
    ? await signInWithGoogle()
    : await signInWithEmailPass(signInData);
}

export async function signOutFirebase() {
  await signOut(auth);
}
export const signUpInFirebase = (signUpData) => {
  createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
    .then((response) => {
      alert("registration successful");
    })
    .catch((e) => console.log(e.message));
  return signUpData.email;
};
