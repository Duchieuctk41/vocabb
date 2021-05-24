export const initVocabURL = (storeId, front, back) => `http://localhost:3001/init-vocab/${storeId}-${front}-${back}`;
export const initAchievementURL = () => `http://localhost:3001/init-achievement`;

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
