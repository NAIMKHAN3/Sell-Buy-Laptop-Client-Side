import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from 'firebase/auth'

export const AuthContex = createContext([])

const auth = getAuth();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({})

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name) => {
        return updateCurrentUser(auth.currentUser, { displayName: name })
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
        <AuthContex.Provider value={{ user, signUp, updateUser, logIn, logOut }}>
            {children}
        </AuthContex.Provider>
    );
};

export default UserContext;