import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile, onAuthStateChanged, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const auth = getAuth(app);
export const UserContext = createContext();

const AuthContext = ({children}) => {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // update user
  const updateUser = (name, url) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url
    })
  }

  // signIn user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // reset password
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  }

  // get the currently logged in user
  useEffect( ()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if(currentUser){
        setUser(currentUser);
        setLoading(false);
      }
    })
    return () => {
      unsubscribe();
    }
  }, [])

  //google user
  const googleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  //google user
  const facebookUser = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  }

  // signOut user
  const signOutUser = () => {
    setLoading(true);
    signOut(auth)
    .then(()=>{
      toast.warning('Successfully Sign Out!', {autoClose: 2000});
    })
    .catch(err => console.error(err))
  }

  const authInfo = {user, loading, createUser, updateUser, signInUser, resetPassword, googleUser, facebookUser, signOutUser};
  return (
    <UserContext.Provider value={authInfo}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;