import { createContext, useState } from 'react';

export let AuthContext = createContext();

export function AuthContextProvider({ children }) {
    let [auth, setAuth] = useState({});

    let authUser = (user) => {
        
        setAuth(user);
        console.log(auth);
    }

    let contextData = {
        auth,
        authUser,
    }


    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}