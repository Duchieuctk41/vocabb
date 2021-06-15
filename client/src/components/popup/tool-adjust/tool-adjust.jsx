import React from "react";
import style from "./tool-adjust.module.scss";
import { useDispatch } from "react-redux";
import { deleteVocabActions } from "./../../../redux/actions/vocabActions";
import { removeItem } from "./../../../redux/actions/storeActions";
const ToolAdjust = ({ id, storeId }) => {

  const dispatch = useDispatch();

  // Xóa vocab
  const onClickRemove = async (id, storeId) => {
    dispatch(removeItem(storeId));
    dispatch(deleteVocabActions(id, storeId));
  }

  const onClickAdjust = (id) => {
    alert(id);
  }

  return (
    <div className={style.tool}>
      <button onClick={() => onClickAdjust(id)}>Sửa</button>
      <button onClick={() => onClickRemove(id, storeId)}>Xóa</button>
    </div>
  );
}

export default ToolAdjust;
