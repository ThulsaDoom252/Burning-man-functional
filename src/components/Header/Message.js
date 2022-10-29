import React from 'react';
import {FaWindowClose} from "react-icons/fa";

function Message(props) {
    return (
        <div className="message">
                <div className="message-text">You cannot order tickets. Because of this site is for testing purpose only &#128512;</div>
                <button onClick={ () => {
                    props.clicked(false)
                }} className="message-button"><FaWindowClose/></button>
        </div>
    );
}

export default Message;