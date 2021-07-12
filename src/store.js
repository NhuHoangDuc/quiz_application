import { createStore } from "redux";
import Randomnumber from './randomfunction'
import shuffleArray from './shufflefunction'

const initialState = {
  count: 1,
  score: 0,
  scoreList: [],
  showScore: false,
  questionList: Randomnumber(12, 1, 19)
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "nextQuestion":
      return {
        ...state,
        count: state.count + 1,
     
      };
    case "showAndSaveScore":
      return {
        ...state,
        showScore: true,
        scoreList: [...state.scoreList, state.score]
      };
    case "computeScore":
      return {
        ...state,
        score: state.score + 1
      };
    case "reset":
      return {
        ...state,
        showScore: false,
        count: 1,
     
        score: 0,
        questionList: Randomnumber(12, 1, 19)
      };

    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
