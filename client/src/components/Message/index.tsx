import React from "react";

function Message({ message }: any) {

    // TODO get id from contecxt 
    const id = 1;
    return (
        <div className={message.sender == id ? "message own" : "message"} >
            <p className="text">{message.text}{message.text}{message.text}{message.text}</p>
            <div className="controler">
                <div className="icons">
                    <span>k</span>
                    <span>j</span>
                </div>
                <span>{message.data}</span>
            </div>
        </div>
    );
}

export default Message;