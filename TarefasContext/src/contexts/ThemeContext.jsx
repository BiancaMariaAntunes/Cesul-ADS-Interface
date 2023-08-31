import { Children, createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('dark');

    function changeTheme(){

        setTheme(theme !== 'dark' ? 'dark' : 'light')

    }

    return <ThemeContext.Provider value={{theme, changeTheme}}>{children}</ThemeContext.Provider>

}