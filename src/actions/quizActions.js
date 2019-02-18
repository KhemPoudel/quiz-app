import axios from 'axios';

export function fetchQuestions() {
  return async (dispatch) => {
    dispatch(fetchingProcess);
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple'),
        quiz_questions = response.data.results.map((quiz_question, index) => {
          const { incorrect_answers, correct_answer } = quiz_question,
            randomIndex = Math.floor(Math.random() * (incorrect_answers.length + 1));
          incorrect_answers.splice(randomIndex, 0, correct_answer);
          const correct_option_index = incorrect_answers.findIndex(option => option === correct_answer),
            question = quiz_question.question.replace(/&quot;/g, '\\"');
          return { ...quiz_question, id: `${index}_${question}`, options: incorrect_answers, correct_option_index, question, index };
        });
      dispatch(fetchingSuccess(quiz_questions));
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
export function askAnotherQuestion() {
  return {
    type: 'ASK_ANOTHER_QUESTION'
  }
}

export function completeQuiz() {
  return {
    type: 'COMPLETE_QUIZ'
  }
}

export function finishQuiz() {
  return {
    type: 'FINISH_QUIZ'
  }
}