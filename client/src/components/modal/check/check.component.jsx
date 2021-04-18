import React from "react";
import style from "./check.module.scss";

import { cancel, check, flag, flagtrue } from "./../../../img";

const Check = ({ report, result, processedd }) => {
  let checkProcess = processedd;
  return (
    <div className={style.content}>
      <div
        className={`${style.main} ${
          report ? style["--true"] : style["--false"]
        }`}
      >
        <div className={style.main__alert}>
          <div className={style["main__alert-close"]}>
            <img src={report ? check : cancel} alt="cancel" />
          </div>
          <div className={style["main__alert-title"]}>
            <h2>{report ? "Giỏi lắm!" : "Đáp án đúng:"}</h2>
            {report ? "" : <span className={style["--answer"]}>{result}</span>}
            <div className={style.article}>
              <img src={report ? flagtrue : flag} alt="flag" />
              <span>Báo cáo</span>
            </div>
          </div>
        </div>
        <div className={style.main__continue}>
          <button onClick={() => checkProcess(report)}>Tiếp Tục</button>
        </div>
      </div>
    </div>
  );
};

export default Check;
