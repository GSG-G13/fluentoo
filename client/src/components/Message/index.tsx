import React from "react";

function Message({ message }: any) {
    console.log(message);

    return (
        <div className={message.isOur ? "message own" : "message"} >
            <p className="text">{message.text}</p>
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