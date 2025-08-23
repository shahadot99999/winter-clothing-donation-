import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"



export const AuthContext =createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setuser]= useState(null);

    console.log(user);


    const createNewUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

     const logOut =()=>{
        return signOut(auth);
     }
    const authInfo = {
        user,
        setuser,
        createNewUser,
        logOut,
        userLogin
    }; 

    useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, currentUser=>{
      setuser(currentUser);
     })
     return () =>{
       unsubscribe();
     }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;