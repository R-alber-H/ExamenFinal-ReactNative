import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../infrastructure/firebase/firebaseConfig";

export const loginUser = async (email: string, password: string) => {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential;
};

export const logoutUser = async () => {
  await signOut(auth);
};