/**
 * A context object representing the AuthContext, which provides authentication-related data and functions.
 * @typedef {Object} AuthContext
 * @property {function} getUser - Retrieves user data from local storage.
 * @property {function} setUser - Sets user data in local storage.
 * @property {function} clearUser - Removes user data from local storage.
 */

import { createContext, useContext, useReducer } from "react";

/**
 * A context object representing the AuthContext, which provides authentication-related data and functions.
 * @type {AuthContext}
 */
export const AuthContext = createContext();

/**
 * A reducer function for the AuthContext state.
 * @function
 * @param {Object} state - The current state of the AuthContext.
 * @param {Object} action - The action to be performed on the state.
 * @param {string} action.type - The type of action to be performed.
 * @param {Object} action.payload - The data associated with the action.
 * @returns {Object} The new state after the action has been performed.
 */
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

/**
 * A provider component that wraps the children components with the AuthContext provider.
 * @param {Object} props - The props to be passed to the provider component.
 * @param {Object} props.children - The child components to be wrapped with the provider.
 * @returns {JSX.Element} The JSX element representing the provider component.
 */
export const AuthProvider = ({children}) => {
    const getUser = () => JSON.parse(window.localStorage.getItem("user"));
    
    const setUser = (user) => {
        window.localStorage.setItem("user", JSON.stringify(user));
    }
    const clearUser = () => {
        window.localStorage.removeItem("user");
    }
    return (
        <AuthContext.Provider value = {{getUser, setUser, clearUser}}>
            {children} 
        </AuthContext.Provider>
    )
}

/**
 * A hook that returns the AuthContext object for accessing authentication-related data and functions.
 * @returns {AuthContext} The AuthContext object.
 */
export const useAuth = () => useContext(AuthContext);
