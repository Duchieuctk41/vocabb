export const initVocabURL = (storeId, front, back) => `http://localhost:3001/init-vocab/?storeId=${storeId}&front=${front}&back=${back}`;
export const initAchievementURL = () => `http://localhost:3001/init-achievement`;
export const initAdLessonURL = (name, grade, img) => 
`http://localhost:3001/init-admin-lesson/?name=${name}&grade=${grade}&img=${img}`;
export const initAdGameURL = (name, grade) => 
`http://localhost:3001/init-admin-game/?name=${name}&grade=${grade}`;

export const initQuestionURL = (topic, question, sentence, type, illustration, title1, correct1, img1, title2, correct2, img2, title3, correct3, img3) => 
`http://localhost:3001/init-question/?topic=${topic}&question=${question}&sentence=${sentence}&type=${type}&illustration=${illustration}&title1=${title1}&img1=${img1}&correct1=${correct1}&title2=${title2}&img2=${img2}&correct2=${correct2}&title3=${title3}&img3=${img3}&correct3=${correct3}`;

export const initQuestionOrderURL = (topic, question, sentence, type, illustration, title1, correct1, order1, title2, correct2, order2, title3, correct3, order3, title4, correct4, order4, title5, correct5, order5, title6, correct6, order6) => 
`http://localhost:3001/init-question/?topic=${topic}&question=${question}&sentence=${sentence}&type=${type}&illustration=${illustration}&title1=${title1}&order1=${order1}&correct1=${correct1}&title2=${title2}&order2=${order2}&correct2=${correct2}&title3=${title3}&order3=${order3}&correct3=${correct3}&title4=${title4}&order4=${order4}&correct4=${correct4}&title5=${title5}&order5=${order5}&correct5=${correct5}&title6=${title6}&order6=${order6}&correct6=${correct6}`;

export const lessonURL = () => `http://localhost:3001/api-lesson`;
export const lessonIdURL = (id) => `http://localhost:3001/api-lessonid/${id}`;
export const gameURL = (idQuestion) => `http://localhost:3001/api-game/${idQuestion}`;
export const idGameURL = () => `http://localhost:3001/api-idgames`;
export const questionURL = (id) => `http://localhost:3001/api-question/${id}`;
export const studiedURL = () => `http://localhost:3001/api-studied`;
export const apiAchievementURL = () => `http://localhost:3001/api-achievement`;
export const storeURL = () => `http://localhost:3001/api-store`;
export const vocabURL = (storeId) => `http://localhost:3001/api-vocab/${storeId}`;
export const vocabAllURL = () => `http://localhost:3001/api-vocab-user`;

export const postSignupUrl = () => `http://localhost:3001/register`;
export const verifyUrl = () => `http://localhost:3001/login-register`;
export const authLoginUrl = () => `http://localhost:3001/login`;
export const logoutUrl = () => `http://localhost:3001/logout`;
export const checkLoggedIn = () => `http://localhost:3001/check-login`;
export const checkLoggedOut = () => `http://localhost:3001/check-logout`;

export const updateAchievementURL = () => `http://localhost:3001/update-achievement`;

export const deleteVocabURL = (id) => `http://localhost:3001/delete-vocab/${id}`;

export const getUserId = () => `http://localhost:3001/api-userid`; 
export const updateGradeUrl = (userId, lessonId) => `http://localhost:3001/update-grade/${userId}-${lessonId}`;
