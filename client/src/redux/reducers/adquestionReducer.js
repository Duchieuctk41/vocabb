import { adquestionTypes } from "./../types/adquestionTypes";
import { addItemtoAdQuestion, clearItem } from "./../utils/addItemtoAdQuestion";

const initState = {
    adquestion: {
        topic: "",
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
};

const adquestionReducer = (state = initState, action) => {
    switch (action.type) {
        case adquestionTypes.FETCH_QUESTION:
            return { ...state, adquestion: action.payload.question };
        case adquestionTypes.ADD_ITEM:
            return { ...state, adquestion: addItemtoAdQuestion(state.adquestion, action.payload) };
        case adquestionTypes.CLEAR_ITEM:
            console.log("vao day");
            return { ...state, adquestion: clearItem(state.adquestion) };

        default:
            return state;
    }
};

export default adquestionReducer;