import React, { Component } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

const Like = (props) => {

    const chooseLikeHeart = function () {
        return (props.liked) ? <AiFillHeart /> : <AiOutlineHeart />
    }
    return (
        <div
            onClick={props.onClick}
            style={{ cursor: "pointer" }}>
            { chooseLikeHeart() }
        </div>
    );
}

export default Like;