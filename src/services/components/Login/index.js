import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import useUser from "../../../hooks/useUser";
import './Login.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [, navigate] = useLocation();
    const { isLoginLoading, hasLoginError, isLogged, login } = useUser();

    useEffect(() => {
        if (isLogged) navigate('/')
    }, [isLogged, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        //alert(`Username: ${username}, Password: ${password}`);
        login({ username, password });
        //navigate('/');
    }

    return (
        <>
            {isLoginLoading && <strong>Checking credentials...</strong>}
            {
                !isLoginLoading &&
                <form className="form" onSubmit={handleSubmit}>
                    <label>Username:
                        <input
                            placeholder="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </label>
                    <label>Contraseña:
                        <input
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                    <button className="btn">Login</button>
                </form>
            }
            {
                hasLoginError && <strong>Invalid credentials</strong>
            }
        </>
    )
}