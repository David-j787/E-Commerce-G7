import { createContext, useContext, useState } from "react";
import { signInWithPopup, GithubAuthProvider} from 'firebase/auth';
import { auth } from "../firebase-config";

const Context = createContext({});

export const useUserContext = () => useContext(Context);

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState('');
    const [jwt, setJwt] = useState(null);

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
        jwt, 
        setJwt,
        signInWithGithub,
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export default Context