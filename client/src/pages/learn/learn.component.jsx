import React, { useState } from "react";
import style from "./learn.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Learn = () => {
    
    const { vocab } = useSelector(state => state.vocab);
    const { storeid } = useParams();
    
    const [position, setPosition] = useState(0);

    return (
        <div>
            <div>{vocab[position].front}</div>
            <div>{vocab[position].back}</div>
            <button>quay lại</button>
            
            <button>tiếp</button>
        </div>
    )
}

export default Learn;
