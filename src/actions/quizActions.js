import axios from 'axios';

export function fetchQuestions() {
  return async (dispatch) => {
    dispatch(fetchingProcess);
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple'),
        questions = response.data.results.map((question, index) => {
          return { ...question, id: `${index}_${question.question}` }
        });
      dispatch(fetchingSuccess(questions));
    } catch (error) {
      dispatch(fetchingError(error));
    }
  };
}
const fetchingError = (error) => {
  return {
    type: 'QUESTIONS_FETCHED_FAIL',
    error
  }
};
const fetchingSuccess = (questions) => {
  return {
    type: 'QUESTIONS_FETCHED_SUCCESS',
    questions
  }
};
const fetchingProcess = () => {
  return {
    type: 'QUESTIONS_FETCHING'
  }
};
export function checkAnswer() {
  return {
    type: 'RIGHT_ANSWER'
  }
}