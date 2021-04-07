import React from "react";

import style from "./learned.module.scss";

const Introduce = () => {
  return (
    <div className={style["container-fluid"]}>
      <div className={style.container}>
        <div className={style.left}>
          <h1>Đã học từ vựng tiếng Anh</h1>
          <span>808 từ</span>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Từ vựng</th>
                <th>Từ loại</th>
                <th>Lần cuối luyện tập</th>
                <th>Độ mạnh</th>
              </tr>
            </thead>
            <tbody>
              <tr className={style.tr}>
                <td>yes</td>
                <td>Adverb</td>
                <td>1 tuần trước</td>
                <td>
                  <span className={style["--level"]}></span>
                </td>
              </tr>
              <tr className={style.tr}>
                <td>yes</td>
                <td>Adverb</td>
                <td>1 tuần trước</td>
                <td>
                  <span className={style["--level"]}></span>
                </td>
              </tr>
              <tr className={style.tr}>
                <td>yes</td>
                <td>Adverb</td>
                <td>1 tuần trước</td>
                <td>
                  <span className={style["--level"]}></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={style.right}>
          <div className={style.note}>
            <h2>Lặp lại ngắt quãng</h2>
            <p>
              Thuật toán của Duolingo sẽ tính toán khi nào bạn nên luyện tập từ
              vựng để có thể ghi nhớ từ một cách lâu dài.
            </p>
            <div className={style.desc}>
              <div className={style.desc__type}>
                <span className={style["--level"]}></span>
                <span>Xuất sắc</span>
              </div>
              <div className={style.desc__type}>
                <span className={style["--level"]}></span>
                <span>Vẫn tốt</span>
              </div>
              <div className={style.desc__type}>
                <span className={style["--level"]}></span>
                <span>Đến lúc luyện tập rồi</span>
              </div>
              <div className={style.desc__type}>
                <span className={style["--level"]}></span>
                <span>Đã quên</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
