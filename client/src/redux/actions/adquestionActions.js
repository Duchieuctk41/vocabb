import { adquestionTypes } from "./../types/adquestionTypes";

export const adquestionActions = () => ({
    type: adquestionTypes.FETCH_QUESTION,
});

export const addItem = (el) => ({
  type: adquestionTypes.ADD_ITEM,
  payload: el,
});
