import { createContext, useState } from "react";

export const userContext = createContext();

const UserProvider = ({children})=>{
    const [user, setUser] = useState(null);

    const correctEmail = "test@gmail.com"
    const correctPassword = "123456789"

    const login = (email, password)=>{
        if(email === correctEmail && password === correctPassword){
            setUser({email})
            return {success: true}
        }
        else 
           return {success: false, message: "Invalid email or password"}
    }

    const logout = ()=> setUser(null);


    return(
        <userContext.Provider value={{user, login, logout}}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider