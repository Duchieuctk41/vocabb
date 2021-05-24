import React from "react";
import style from "./tool-adjust.module.scss";
import { useDispatch } from "react-redux";
import { deleteVocabActions } from "./../../../redux/actions/vocabActions";
const ToolAdjust = ({ id }) => {

  const dispatch = useDispatch();

  // Xóa vocab
  const onClickRemove = async (id) => {
    dispatch(deleteVocabActions(id));
  }

  const onClickAdjust = (id) => {
    alert(id);
  }

  return (
    <div className={style.tool}>
      <button onClick={() => onClickAdjust(id)}>Sửa</button>
      <button onClick={() => onClickRemove(id)}>Xóa</button>
    </div>
  );
}

export default ToolAdjust;
