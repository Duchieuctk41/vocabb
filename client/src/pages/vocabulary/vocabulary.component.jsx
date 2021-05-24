import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./vocabulary.module.scss";
import { vocabAllActions } from "./../../redux/actions/vocabActions";
import { useDispatch } from "react-redux";
import VocabAll from "./../../components/vocab-all/vocab-all.component";

const Vocabulary = () => {
  const dispatch = useDispatch();
  const { vocab } = useSelector(state => state.vocab);
  useEffect(() => dispatch(vocabAllActions()), []);
  return (
    <div className={style["container-fluid"]}>
      <div className={style.container}>
        <div className={style.left}>
          <h1>Danh sách từ vựng của bạn</h1>
          <span>{vocab.length} Từ</span>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Mặt trước</th>
                <th>Mặt sau</th>
                <th>Hình ảnh</th>
                <th>Bộ từ</th>
              </tr>
            </thead>
            <tbody>
              {
                vocab.map(item => <VocabAll item={item} />)
              }
            </tbody>
          </table>
        </div>
        <div className={style.right}>
          <div className={style.note}>
            <h2>Lặp lại ngắt quãng</h2>
            <p>
              Thuật toán của Vocabb sẽ tính toán khi nào bạn nên luyện tập từ
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

export default Vocabulary;
