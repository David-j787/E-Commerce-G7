import { useContext, useCallback } from 'react';
import Context from '../context/userContext';

export default function useUser(){
    const { jwt, setJwt } = useContext(Context)

    const login = useCallback(_ => {
        setJwt('test')
    }, [setJwt])

    return {
        isLogged: Boolean(jwt),
        login
    }
}