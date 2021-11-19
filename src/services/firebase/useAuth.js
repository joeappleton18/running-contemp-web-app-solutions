import { useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      setIsAuthenticated(true);
      return;
    }
    setIsAuthenticated(false);
    return;
  });

  const createEmailUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signInEmailUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signUserOut = () => signOut(auth);

  return { createEmailUser, isAuthenticated, signInEmailUser, signUserOut };
}
export default useAuth;
