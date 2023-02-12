import { createContext, useContext, useReducer } from "react"

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT":
            return { user: null }
        default:
            return state
    }
}
export const AuthProvider = ({children}) => {
    // const [state, dispatch] = useReducer(authReducer, {
    //     user: null
    // })
    // console.log("AuthContext state: ", state)
    const getUser = () => JSON.parse(window.localStorage.getItem("user"))
    
    const setUser = (user) => {
        window.localStorage.setItem("user", JSON.stringify(user))
    }
    const clearUser = () => {
        window.localStorage.removeItem("user")
    }
    return (
        <AuthContext.Provider value = {{getUser, setUser, clearUser}}>
            {children} 
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)