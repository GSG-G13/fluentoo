import React from "react";
import { TranslationOutlined, SoundOutlined } from '@ant-design/icons';
import { MessageObjectType } from '../../utils';

function Message({ text, isOur }: MessageObjectType) {
    return (
        <div className={isOur ? "message own" : "message"} >
            <p className="text">{text}</p>
            <div className="controler">
                <div className="icons">
                    <span><TranslationOutlined /></span>
                    <span><SoundOutlined /></span>
                </div>
            </div>
        </div>
    );
}

export default Message;