import React, { useState } from "react";
import ToolAdjust from "../popup/tool-adjust/tool-adjust";
import style from "./vocab-list.module.scss";

const Vocab = ({ item }) => {
    const [tool, setTool] = useState(false);

    const onToolAdjustHandler = () => {
        setTool(!tool);
    }
    return (
        <div>
            <tr onClick={() => onToolAdjustHandler()} className={tool ? style.active : null} >
                <td>{item.front}</td>
                <td>{item.back}</td>
                <td>{item.img}</td>
            </tr>
            {tool ? <ToolAdjust id={item._id} /> : null}
        </div>
    )
}
export default Vocab;
