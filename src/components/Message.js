import React from "react";
import { useEffect } from "react";

function Message({ messageText, removeMessage, showMessage, setShowMessage }) {

    useEffect(() => {
        const clearMessage = setTimeout(() => {
            setShowMessage(false);
        }, 1500);
        return () => clearTimeout(showMessage);
    }, [showMessage]);

    return (
        <div className="message">
            <span className="close-message" onClick={removeMessage}>X</span>
            <p>
               {messageText} 
            </p>
        </div>
    );
}

export default Message;