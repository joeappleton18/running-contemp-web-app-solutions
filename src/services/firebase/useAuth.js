import {
	createUserWithEmailAndPassword, getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword, signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";


function useAuth() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState({})
	const auth = getAuth();

	useEffect(() => {

		onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsAuthenticated(true);
				console.log(user)
				setUser(user);
				return;
			}
			setIsAuthenticated(false);
			console.log("auth called");
			return;
		});

	}, [setIsAuthenticated, auth])



	const createEmailUser = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);

	const signInEmailUser = (email, password) =>
		signInWithEmailAndPassword(auth, email, password);

	const signUserOut = () => signOut(auth);

	return { createEmailUser, isAuthenticated, signInEmailUser, signUserOut, user };
}

export default useAuth;
