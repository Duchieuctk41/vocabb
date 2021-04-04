import React from "react";
import { Link } from "react-router-dom";

import{
    robot,
    achievement_wildfire,
    us,
} from "../../img";

import  style from "./profile.module.scss";

const Profile = () => {
    return (
        <div className={style.main}>
            <div className={style.header}>

            </div>
            <div className={style.content}>
                <div className={style.left}>
                    <div className={style.avt}>
                        <img src={robot} alt="avt"/>
                        <span>Avatar(Avatar4952)</span>
                    </div>
                    <div className={style.achievement}>
                        <h2>Thành tích</h2>
                    </div>
                    <div className={style.theme}>
                        <div className={style.image}>
                            <img src={achievement_wildfire} alt="achievement_wildfire"/>
                        </div>
                        <div className={style.level}>
                            <h3>Lửa rừng</h3>
                            <div className={style.streak}>Đạt chuỗi 3 ngày Streak</div>
                            <div className={style.streaked}>
                                <div className={style.streaked1}>
                                    <div className={style.ratio}></div>
                                </div>
                                <div className={style.streaked2}>
                                    <p>1/1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.language}>
                        <h2>Ngôn ngữ</h2>
                        <div className={style.us}><img src={us} alt="us"/></div>
                        <div className={style.kn}>
                            <span>Tiếng anh<br></br></span>
                            <p>Tổng điểm KN: 30KN</p>
                        </div>
                    </div>
                    
                    <div className={style.friend}>
                        <h2>Bạn bè</h2>
                        <div className={style.foll}>
                            <div className={style.follow}><Link to="#">Đang theo dõi</Link></div>
                            <div className={style.follow}><Link to="#">Được theo dõi</Link></div>
                        </div>
                        <div className={style.list}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;