import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import authInitialize from "../Pages/Shared/Login/firebase/firebase.init";

// call auth initialization
authInitialize();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    // google log in function
    const googleLogIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
            })
            .finally(() => setIsLoading(false));
    }
    
    const toggleLogin = e => {
      setIsLogin(e.target.checked)
    }
  
    const handleNameChange = e => {
      setName(e.target.value);
    }
    const handleEmailChange = e => {
      setEmail(e.target.value);
    }
  
    const handlePasswordChange = e => {
      setPassword(e.target.value)
    }

    // handle registration function
    const handleRegistration = e => {
      e.preventDefault();

      if (password.length < 6) {
        setError('Password Must be at least 6 characters long.')
        return;
      }
      if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        setError('Password Must contain 2 upper case');
        return;
      }
  
      if (isLogin) {
        processLogin(email, password);
      }
      else {
        registerNewUser(email, password);
      }
    }
  
    // process log in function
    const processLogin = (email, password) => {
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          setUser(user);
          setError(''); 
        })
        .catch(error => {
          setError(error.message);
        })
    }
  
    // new user registration fuction
    const registerNewUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          setError('');
          verifyEmail();
          setUserName();
        })
        .catch(error => {
          setError(error.message);
        })
    }
  
    const setUserName = () => {
      updateProfile(auth.currentUser, { displayName: name })
        .then(result => { })
    }
  
    const verifyEmail = () => {
      sendEmailVerification(auth.currentUser)
        .then(result => {
          console.log(result);
        })
    }
  
    const handleResetPassword = () => {
      sendPasswordResetEmail(auth, email)
        .then(result => { })
    }

    useEffect(() => {
      const unsubcribed = onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user)
          } else {
              setUser({ })
          }
          setIsLoading(false)
      });
      return () => unsubcribed;
  }, [isLoading])
      
    // user log out function
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => { })
        .finally(() => setIsLoading(false))
    }

    return {
      user,
      isLogin,
      name,
      email,
      password,
      isLogin,
      error,
      handlePasswordChange,
      googleLogIn,
      isLoading,
      logOut,
      handleRegistration,
      handleNameChange,
      toggleLogin,
      registerNewUser,
      processLogin, 
      handleResetPassword,
      handleEmailChange,
      verifyEmail
    }
};

export default useFirebase;