import { createContext, useEffect, useState } from 'react';
import app from './Firebase.init'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



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
            console.log(res.user)
            updateProfile(auth.currentUser, {
                displayName: firstName +" "+lastName,
                photoURL: photoUrl,
            }).then( () => {
                setUser(res.user);
            })
        })
    }

    //singing user with emaeil and password
    const singinwithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password).then((res) => {
            setUser(res.user);
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

    //logout
    const clickToSingOut = () => {
        signOut(auth).then(() => {
            console.log("singout confirme")
        }).catch((err) => {
            console.error(err);
        })
    }

    const data = {
        clickToSingInAndUp,
        uesrWithEmailAndPassword,
        singinwithEmailAndPassword,
        user,
        loader,
        setloader,
        clickToSingOut
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;