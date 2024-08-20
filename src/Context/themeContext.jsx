import { createContext, useContext, useEffect, useState } from "react";
import {motion} from 'framer-motion'

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({children}) => {
    const storedTheme = localStorage.getItem('theme') || 'light';

    const [theme, setTheme] = useState(storedTheme)

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme)
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
         <motion.div
        key={theme} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
        </ThemeContext.Provider>
    )
}