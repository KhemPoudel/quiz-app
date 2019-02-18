const initialState = {
  questions: [],
  fetching: true,
  finished: false,
  completed: false,
  currentQuestion: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'QUESTIONS_FETCHED_SUCCESS':
      return { ...state, questions: action.questions, fetching: false, currentQuestion: action.questions[0] };
    case 'QUESTIONS_FETCHED_FAIL':
      return { ...state, fetching: false, error: action.error };
    case 'QUESTIONS_FETCHING':
      return { ...state, fetching: true };
    case 'ASK_ANOTHER_QUESTION':
      return { ...state, currentQuestion: selectNextQuestion(state) };
    case 'COMPLETE_QUIZ':
      return { ...state, completed: true };
    case 'FINISH_QUIZ':
      return { ...state, finished: true };
    default:
      return state;
  }
}

const selectNextQuestion = ({ questions, currentQuestion: { index } }) => {
  console.log(index);
  return questions[index + 1];
}