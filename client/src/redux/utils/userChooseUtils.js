export const addUserChoose = (userChoose, addItem) => {
    return [...userChoose, addItem];
};

export const addUserInput = (userChoose, addItem) => {
    console.log(addItem);
    return { userChoose: addItem.userChoose };
};

export const removeUserChoose = (userChoose, addItem) => {
    return userChoose.filter((it) => it !== addItem);
};

export const clearUserChoose = () => {
    return [];
};
