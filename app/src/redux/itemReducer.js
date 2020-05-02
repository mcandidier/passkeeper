
import { getAllItems } from '../api';


const itemReducer = (state=[], action) => {
    switch(action.type) {
        case 'GET_ITEMS':
            return action.items
        case 'ADD_ITEM':
            return [action.payload.item, ...state]
        case 'REMOVE_ITEM':
            return state.filter(item => {
                return item.id !== action.payload.id;
            });
        default:
            return state;
    }
}

export default itemReducer;





