import data from '../data'


export const getItemsRequest = () => dispatch => {
    dispatch({type: 'GET_ITEMS_REQUEST'});
    try{
        setTimeout(() => {
            dispatch({type: 'FETCH_ITEMS_SUCCESS', payload: data})
        }, 2000)
    }
    catch (error) {
        console.log(error);
    }
}


export const addItem = () => dispatch => {
    setTimeout(() => {
        dispatch({
            type: 'ADD_ITEM_SUCCESS', 
            payload: {
                "id": Date.now().toString(),
                "title": "Enter some text",
                "settings": {
                    "activated": true,
                    "editable": false 
                }
            } 
        })
    }, 1000)
}
export const editStartItem = (id) => dispatch => {
    setTimeout(() => {
        dispatch({
            type: 'EDITING_ITEM_SUCCESS', 
            payload: id
        })
    }, 1000)
}

export const activatedItem = (id) => dispatch => {
        dispatch({
            type: 'ACTIVATED_ITEM_SUCCESS', 
            payload: id
        })
}

export const editeCompletedItem = (id, newTitle) => dispatch => {
    dispatch({
        type: 'EDITED_ITEM_SUCCESS', 
        payload: {id, newTitle}
    })
}

export const deleteItem = (data) => dispatch => {
        dispatch({
            type: 'DELETE_ITEM_SUCCESS', 
            payload: data
        })
}