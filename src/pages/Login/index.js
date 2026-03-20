import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import useUser from "../../hooks/useUser";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [, navigate] = useLocation();
    const {login, isLogged} = useUser();

    useEffect(()=>{
        if (isLogged) navigate('/')    
    }, [isLogged, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        //alert(`Username: ${username}, Password: ${password}`);
        login();
        //navigate('/');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button>Login</button>
        </form>
    )
}