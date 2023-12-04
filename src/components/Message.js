import React from "react";
import { useEffect } from "react";

function Message({ messageText, removeMessage }) {

    useEffect(() => {
        const clearMessage = window.setTimeout(() => {
            removeMessage();
        }, 1500);
        return () => window.clearTimeout(clearMessage);
    }, []);

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