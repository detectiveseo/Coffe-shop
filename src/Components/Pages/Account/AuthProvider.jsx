import React, { createContext, useEffect, useState } from 'react';
import app from './Firebase.init'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loader, setloader] = useState(true)

    const [user, setUser] = useState(null);
    //google singup and login
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const clickToSingInAndUp = () => {
        signInWithPopup(auth, googleProvider)
        .then((res) => {
            setUser(res.user);
            setloader(false);
        });
    }

    //create user with email and password
    const uesrWithEmailAndPassword = (email, password, firstName, lastName, photoUrl) => {
        createUserWithEmailAndPassword(auth, email, password).then((res) => {
            updateProfile(auth.currentUser, {
                displayName: firstName +" "+lastName,
                photoURL: photoUrl,
            }).then( () => {
                setUser(res.user);
                setloader(false);
            })
        })
    }

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setloader(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const data = {
        clickToSingInAndUp,
        uesrWithEmailAndPassword,
        user,
        loader,
        setloader
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;