import initializeFirebaseApp from "./../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
initializeFirebaseApp();

const useFirebase = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isloginchack, setisloginchack] = useState(false);

  const haveAnAccount = (e) => {
    setisloginchack(e.target.checked);
  };

  const emailHandeler = (e) => {
    setEmail(e.target.value);
  };
  const nameHandeler = (e) => {
    setName(e.target.value);
  };
  const passwordHandeler = (e) => {
    setPassword(e.target.value);
  };

  const formClickHandeler = (e) => {
    console.log(name, email, password);
    e.preventDefault();
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      setError(
        "password showed be minimum 8 characters , minimum one special character , minimum one uppercase and one lowercase letter required."
      );
      return;
    } else {
      if (isloginchack === true) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            setError("");
          })
          .catch((error) => {
            setError(error.message);
          });
      }
    }
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
    haveAnAccount,
    isloginchack,
    nameHandeler,
    name,
  };
};
export default useFirebase;
