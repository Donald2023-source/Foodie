import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [userName, setUserPassword] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')

    const [signUpForm, setSignUpForm] = useState({
        userName: '',
        email: '',
        password: ''
    })


    const signUp = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/auth/signUp', {
                method: 'POST',
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(signUpForm)
            });
            const data = await response.json();
            if(response.ok) {
                console.log('Successful:', data)
            } else {
                console.error('error')
            }
        } catch(err) {
            console.error(err.message)
        }  
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSignUpForm({
            ...signUpForm, 
            [name]: value
        })
    }

    return (
        <AuthContext.Provider value={{signUp, handleChange, signUpForm}}>
            {children}
        </AuthContext.Provider>
    )
}