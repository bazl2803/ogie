"use client"

import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

import { auth, provider } from '@/firebase/firebase';
import { User } from '@/models/user';

const Home = () => {

    const [signedInUser, setSignedInUser] = useState<Partial<User>>({});

    const handleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const firebaseUser = result.user;

            setSignedInUser({
                username: firebaseUser.displayName || "",
                email: firebaseUser.email || "",
                uid: firebaseUser.uid
            })

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <button onClick={ handleSignIn }>Sign In</button>
            <p>
                { JSON.stringify(signedInUser) }
            </p>
        </div>
    )
}

export default Home;