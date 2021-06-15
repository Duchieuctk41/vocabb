export const addItem = (store, id) => {
    let store1 = store.filter(item => item._id === id);
    store1[0].quantity = store1[0].quantity + 1;
    console.log(store1);
    return [ ...store, ...store1 ];
}

export const removeItem = (store, id) => {
    let store1 = store.filter(item => item._id === id);
    store1[0].quantity = store1[0].quantity - 1;
    console.log(store1);
    return [ ...store, ...store1 ];
}