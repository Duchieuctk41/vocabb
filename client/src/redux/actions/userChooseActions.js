import { userChooseTypes } from "../types/userChooseTypes";

export const addUserChooseActions = (item) => ({
  type: userChooseTypes.ADD_USER_CHOOSE,
  payload: item
});

export const addUserInput = (item) => ({
  type: userChooseTypes.ADD_USER_INPUT,
  payload: item
});

export const removeUserChooseActions = (item) => ({
  type: userChooseTypes.REMOVE_USER_CHOOSE,
  payload: item
});

export const clearUserChooseActions = () => ({
  type: userChooseTypes.CLEAR_USER_CHOOSE,
});
