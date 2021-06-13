import { adquestionTypes } from "./../types/adquestionTypes";

export const adquestionActions = () => ({
    type: adquestionTypes.FETCH_QUESTION,
});

export const addItem = (el) => ({
  type: adquestionTypes.ADD_ITEM,
  payload: el,
});


export const clearItem = () => ({
  type: adquestionTypes.CLEAR_ITEM,
})