import React, { createContext, useState } from 'react';

export const AuthContext =createContext();

const AuthProvider = ({children}) => {
    const [user, setuser]= useState({
        name: "Shahadot"
    });

    const authInfo = {
        user,
        setuser,
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;