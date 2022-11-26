import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase.config';
import axios from 'axios';



export const AuthContex = createContext([])

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const UserContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [cetegorys, setCetegorys] = useState([]);
    const [inputModal, setInputModal] = useState(null);

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

    const signInGoogle = () => {
        return signInWithPopup(auth, provider)
    }


    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, [])


    useEffect(() => {
        axios.get('http://localhost:5000/cetegorys')
            .then(res => {
                setCetegorys(res.data)
            })
    }, [])


    return (
        <AuthContex.Provider value={{ inputModal, setInputModal, user, cetegorys, createUser, updateUser, logIn, logOut, signInGoogle }}>
            {children}
        </AuthContex.Provider>
    );
};

export default UserContext;