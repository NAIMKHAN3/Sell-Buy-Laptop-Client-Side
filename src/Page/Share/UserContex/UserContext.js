import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase.config';



export const AuthContex = createContext([])

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name) => {
        return updateProfile(auth.currentUser, { displayName: name })
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, [])

    return (
        <AuthContex.Provider value={{ user, createUser, updateUser, logIn, logOut }}>
            {children}
        </AuthContex.Provider>
    );
};

export default UserContext;