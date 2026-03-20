import React from "react";
import useUser from "../../../hooks/useUser";
import { useLocation } from "wouter";
import "./Fav.css";

export default function Fav({ id }) {
    const { isLogged, fav } = useUser();
    const [, navigate] = useLocation();

    const handleClick = () => {
        if (!isLogged) {
            return navigate('/login')        
        }
        fav({id});
    };

    return (
        <button className="gf-fav" onClick={handleClick}>
        <span role="img" aria-label="Fav Gif">❤️</span>
    </button>
    ) 
}