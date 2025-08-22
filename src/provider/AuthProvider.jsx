import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config"



export const AuthContext =createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setuser]= useState(null);

    console.log(user);


    const createNewUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        setuser,
        createNewUser,
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