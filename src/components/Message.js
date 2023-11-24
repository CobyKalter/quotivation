import React from "react";

function Message({ messageText, removeMessage }) {

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