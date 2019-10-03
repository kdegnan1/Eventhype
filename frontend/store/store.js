import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/root_reducer'
import logger from 'redux-logger'
import thunk from '../thunk/thunk'

export default (preLoadedState = {}) => {
   return createStore(rootReducer, preLoadedState, applyMiddleware(thunk, logger));
} 