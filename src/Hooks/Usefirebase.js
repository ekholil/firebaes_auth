import { useState, useEffect } from "react";
import { getAuth, GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth"
import initializeAuthentication from "./../Firebase/Firebase-init";

initializeAuthentication()
const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin ,setAdmin] = useState(false)
    const [token, setToken] = useState('')

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('')
          const newUser = {email, displayName: name}
          setUser(newUser)
          console.log(userCredential.user)
          //save user to database
         
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {}).catch((error) => {
            
          });
          navigate('/goal')
        })
        .catch((error) => {
          
          setAuthError(error.message)
          // ..
        }) 
        .finally(() => setIsLoading(false)) 
    }
    const signInWithGoogle = (navigate) => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
          .then((result) => {
              const user = result.user;
              setUser(user)
              setAuthError('');
              const destination = '/goal'
              navigate(destination);
          }).catch((error) => {
              setAuthError(error.message);
          }).finally(() => setIsLoading(false));
  }
  
    const logIn = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = '/goal'
            navigate(destination)
            setAuthError('')
        })
        .catch((error) => {
            setAuthError(error.message)
        })
        .finally(() => setIsLoading(false)) ;
    }
    // observe user state
    useEffect(() => {
        const unSubscirbe = onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user)
            getIdToken(user)
            .then(idToken => {
              setToken(idToken)
            })
            } else {
              setUser({})
            }
            setIsLoading(false)
          })
          return () => unSubscirbe;
    }, [auth])

   

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            //sign out success
        }).catch((error) => {
            setAuthError(error.message)
        })
        .finally(() => setIsLoading(false))
    }
 

    return {
        user,
        admin,
        isLoading,
        registerUser, 
        logIn,
        logOut,
        signInWithGoogle,
        authError, 
        token
    }
}
export default UseFirebase;