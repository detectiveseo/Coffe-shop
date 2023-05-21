import React, { createContext } from 'react';
import app from './Firebase.init'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    //google singup and login
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const clickToSingInAndUp = () => {
        signInWithPopup(auth, googleProvider)
        .then((res) => {
            console.log(res.user);
        });
    }

    const data = {
        clickToSingInAndUp
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;