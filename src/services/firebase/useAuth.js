import {
	createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged,
	signInWithEmailAndPassword, signInWithPopup, signOut
} from "firebase/auth";
import { useEffect, useState } from "react";


function useAuth() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState({})
	const auth = getAuth();
	const facebookProvider = new FacebookAuthProvider();
	const googleProvider = new GoogleAuthProvider();

	useEffect(() => {

		onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsAuthenticated(true);
				console.log(user)
				setUser(user);
				return;
			}
			setIsAuthenticated(false);
			setUser({});
			return;
		});

	}, [setIsAuthenticated, auth])



	const createEmailUser = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);

	const signInEmailUser = (email, password) =>
		signInWithEmailAndPassword(auth, email, password);

	const signUserOut = () => signOut(auth);
	const signInFacebookUser = () => signInWithPopup(auth, facebookProvider)
	const signInGoogleUser = () => signInWithPopup(auth, googleProvider);

	return {
		createEmailUser, isAuthenticated, signInEmailUser, signUserOut, user, signInFacebookUser,
		signInGoogleUser
	};
}

export default useAuth;
