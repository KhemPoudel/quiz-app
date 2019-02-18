const initialState = {
  questions: [],
  fetching: true,
  currentQuestion: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'QUESTIONS_FETCHED_SUCCESS':
      return { ...state, questions: action.questions, fetching: false, currentQuestion: action.questions[0] };
    case 'QUESTIONS_FETCHED_FAIL':
      return { ...state, fetching: false, error: action.error };
    case 'QUESTIONS_FETCHING':
      return { ...state, fetching: true };
    case 'RIGHT_ANSWER':
      return { ...state, currentQuestion: selectNextQuestion(state) };
    default:
      return state;
  }
}

const selectNextQuestion = ({ currentQuestion, questions }) => {
  const currentQuestionIndex = questions.findIndex(({ id }) => id === currentQuestion);
  return questions[currentQuestionIndex + 1];
}