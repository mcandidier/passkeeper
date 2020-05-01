
import { getAllItems } from '../api';


const itemReducer = (state=[], action) => {
    switch(action.type) {
        case 'GET_ITEMS':
            return action.items
        case 'ADD_ITEM':
            return [action.payload.item, ...state]
        default:
            return state;
    }
}

export default itemReducer;





