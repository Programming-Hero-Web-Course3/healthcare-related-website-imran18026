import initializeFirebaseApp from "./../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
initializeFirebaseApp();

const useFirebase = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandeler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandeler = (e) => {
    setPassword(e.target.value);
  };

  const formClickHandeler = (e) => {
    // console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      // console.log(user);
    });
    e.preventDefault();
  };

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setError("");
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError("");
      });
  };

  return {
    loginWithGoogle,
    user,
    error,
    handleLogout,
    emailHandeler,
    passwordHandeler,
    formClickHandeler,
  };
};
export default useFirebase;
