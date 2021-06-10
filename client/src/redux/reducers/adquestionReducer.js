import { adquestionTypes } from "./../types/adquestionTypes";
import { addItemtoAdQuestion } from "./../utils/addItemtoAdQuestion";

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
        title2: "",
        correct2: "false",
        img2: "",
        title3: "",
        correct3: "false",
        img3: "",
    }
};

const adquestionReducer = (state = initState, action) => {
    switch (action.type) {
        case adquestionTypes.FETCH_QUESTION:
            return { ...state, adquestion: action.payload.question };
        case adquestionTypes.ADD_ITEM:
            return { ...state, adquestion: addItemtoAdQuestion(state.adquestion, action.payload) }

        default:
            return state;
    }
};

export default adquestionReducer;