import itemReducer from './itemReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    items: itemReducer,
})

export default allReducers;