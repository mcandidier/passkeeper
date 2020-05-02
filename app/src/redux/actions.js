import API from '../api';

export const setItems = (items) => {
    return {
        type: 'GET_ITEMS',
        items
    }
}

export const insertItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: {item}
    }

}
export const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: {id}
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


export const AddItem = (data, handleCallback) => {
    return (dispatch) => {
        return API.post('items/', data)
            .then( res => {
                console.log(res.data, 'data')
                dispatch(insertItem(res.data));
                handleCallback();
            });
    }
}


export const ApiRemoveItem = (id) => {
    return (dispatch) => {
        return API.delete(`items/${id}/`)
            .then( (res) => {
                dispatch(removeItem(id));
            });
    }
}