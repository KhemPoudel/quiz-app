import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import quizReducer from './reducers/quizReducer';

const reducer = combineReducers({
  quiz: quizReducer
}),
  store = createStore(reducer, applyMiddleware(logger, thunkMiddleware));

export default store;  
