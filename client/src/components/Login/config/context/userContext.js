import { createContext, useContext, useState } from "react";
import { signInWithPopup, GithubAuthProvider} from 'firebase/auth';
import { auth } from "../firebase-config";
const userContext = createContext({});

export const useUserContext = () => useContext(userContext);

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState('');

    const signInWithGithub = () => {
        setLoading(true);
        signInWithPopup(auth, new GithubAuthProvider())
        .then(res => console.log(res), err => setError(err.code))
        .finally(() => setLoading(false));
    }

    const contextValue = {
        user,
        error,
        loading,
        signInWithGithub,
    };

    return <userContext.Provider value={contextValue}>{children}</userContext.Provider>
}