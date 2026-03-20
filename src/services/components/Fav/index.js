import React, { useState } from "react";
import useUser from "../../../hooks/useUser";
import { useLocation } from "wouter";
import Modal from "../Modal";
import Login from "../Login";
import "./Fav.css";

export default function Fav({ id }) {
    const { isLogged, addFav, favs } = useUser();
    const [, navigate] = useLocation();
    const [showModal, setShowModal] = useState(false);
    const isFaved = favs.some(favId => favId === id);

    const handleClick = () => {
        if (!isLogged) return setShowModal(true);
        console.log('Adding fav with id', id);
        addFav({ id });
    };

    const handleClose = () => {
        setShowModal(false);
    }

    const [label, emoji] = isFaved ? ['Remove from favs', '❌'] : ['Add to favs', '❤️'];

    return (
        <>
            <button className="gf-fav" onClick={handleClick}>
                <span role="img" aria-label={label}>{emoji}</span>
            </button>
            {showModal && <Modal onClose={handleClose}><Login /></Modal>}
        </>
    )
}