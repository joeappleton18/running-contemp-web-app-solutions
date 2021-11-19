import { useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const auth = getAuth();
  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      setIsAuthenticated(true);
      setUser(auth.currentUser)
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

  const signInFacebookUser = () => signInWithPopup(auth, facebookProvider )
  const signInGoogleUser = () => signInWithPopup(auth, googleProvider);

  return {
    createEmailUser,
    isAuthenticated,
    signInEmailUser,
    signUserOut,
    signInFacebookUser,
    signInGoogleUser,
    user
  };
}
export default useAuth;
