import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import axios from 'axios';
import auth from '../Firebase.config';



export const AuthContex = createContext([])


const provider = new GoogleAuthProvider();
const UserContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [cetegorys, setCetegorys] = useState([]);
    const [inputModal, setInputModal] = useState(null);
    const [loading, setLoading] = useState(true)


    // const createUser = (email, password) => {
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }

    const updateUser = (name) => {
        setLoading(false)
        return updateProfile(auth.currentUser, { displayName: name })
    }

    // const logIn = (email, password) => {
    //     setLoading(false)
    //     return signInWithEmailAndPassword(auth, email, password)
    // }

    const logOut = () => {
        setLoading(false)
        return signOut(auth)
    }

    const signInGoogle = () => {
        setLoading(false)
        return signInWithPopup(auth, provider)
    }


    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser)
    //         setLoading(false)
    //         return () => unsubscribe();
    //     })
    // }, [])


    useEffect(() => {
        axios.get('https://sell-buy-laptop-server-side.vercel.app/cetegorys')
            .then(res => {
                setCetegorys(res.data)
            })
    }, [])


    return (
        <AuthContex.Provider value={{ loading, inputModal, setInputModal, user, cetegorys, updateUser, logOut, signInGoogle }}>
            {children}
        </AuthContex.Provider>
    );
};

export default UserContext;