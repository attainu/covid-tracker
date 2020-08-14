import {createStore,combineReducers,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import Reducer1 from "../Reducers/reducer1";
import Reducer2 from '../Reducers/reducerQuiz';




const rootReducer= combineReducers({countrydata:Reducer1,quiz:Reducer2})

const store= createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store;