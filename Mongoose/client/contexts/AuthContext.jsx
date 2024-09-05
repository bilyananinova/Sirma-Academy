import { createContext, useState } from "react";

export let AuthContext = createContext();

export function AuthContextProvider({ children }) {

    let [userContext, setUserContext] = useState({});

    let authUser = (user) => {
        
        if (user._id) {
            setUserContext(user);
            
        }
    }

    let data = {
        authUser,
        userContext
    }

    return (
        < AuthContext.Provider value={data} >
            {children}
        </AuthContext.Provider >
    )
}