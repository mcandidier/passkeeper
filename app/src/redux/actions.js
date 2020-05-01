import API from '../api';

export const setItems = (items) => {
    return {
        type: 'GET_ITEMS',
        items
    }
}

export const getItems = () => {
    return (dispatch) => {
        return API.get('items/')
            .then( res => {
                dispatch(setItems(res.data));
            });
    }
}
