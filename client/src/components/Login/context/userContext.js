import { createContext, useContext, useState } from "react";

const Context = createContext({});

export const useUserContext = () => useContext(Context);

export function UserContextProvider({children}) {
    const [jwt, setJwt] = useState(() => window.sessionStorage.getItem('jwt'));

    const contextValue = {
        jwt, 
        setJwt,
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export default Context