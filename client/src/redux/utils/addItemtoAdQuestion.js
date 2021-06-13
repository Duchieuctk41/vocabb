export const addItemtoAdQuestion = (adquestion, addItem) => {
    return { ...adquestion, ...addItem };
};

const quesDefault = {
    question: "",
    sentence: "",
    type: "choose",
    illustration: "",

    title1: "",
    correct1: "false",
    img1: "",
    order1: "",

    title2: "",
    correct2: "false",
    img2: "",
    order2: "",

    title3: "",
    correct3: "false",
    img3: "",
    order3: "",

    title4: "",
    correct4: "false",
    order4: "",

    title5: "",
    correct5: "false",
    order5: "",

    title6: "",
    correct6: "false",
    order6: "",
}

export const clearItem = (adquestion) => {
    return {...adquestion, ...quesDefault }
}

