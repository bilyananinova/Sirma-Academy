import { createContext, useState } from "react";

export let AuthContext = createContext({
    isLogged: false
});

export default function AuthContextProvider({ children }) {
    let [auth, setAuth] = useState({});

    let loginUser = (user) => {
        setAuth(user);
    };

    let data = {
        ...auth,
        loginUser,
        isLogged: auth.email,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};