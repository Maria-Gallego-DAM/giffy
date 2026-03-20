import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";


export default function Modal ({ children, onClose }) {
    return <div className="modal">
        <div className="modal-content">
            <button className="btn" onClick={onClose}>Close</button>
            {children}
        </div>
    </div>
}

export function ModalPortal({children, onClose}) {
    return ReactDOM.createPortal(
        <Modal onClose={onClose}>{children}</Modal>,
        document.getElementById("modal-root")
    );
}