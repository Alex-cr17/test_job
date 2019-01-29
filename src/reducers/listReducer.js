
const initialState = {
    isLoading: false,
    list: []
}

function listReducer(state = initialState, action) {
    if(action.type === "GET_ITEMS_REQUEST") {
        return {
            ...state,
            isLoading: true,
        } 
    }
    if(action.type === "FETCH_ITEMS_SUCCESS") {
        return {
            ...state,
            isLoading: false,
            list: action.payload
        } 
    }
    else if(action.type === "ADD_ITEM_SUCCESS") {
        return {
            ...state,
            list: [...state.list, action.payload]
        } 
    }
    else if(action.type === "DELETE_ITEM_SUCCESS") {
        return {
            ...state,
            list: state.list.filter(item => item.id !== action.payload)
        } 
    }
    else if(action.type === "EDITING_ITEM_SUCCESS") {
        if(action.payload) {
    console.log(action.payload);

        const list = state.list.map(item => {
            if(item.id === action.payload) {
                return { ...item, 
                    settings: {
                        activated: true,
                        editable: true
                    } 
                }
            }
            return item;
          })
          return {
            ...state,
            list
          }
        }
    }
    else if(action.type === "EDITED_ITEM_SUCCESS") {
        if(action.payload) {
            const list = state.list.map(item => {
                if(item.id === action.payload.id) {
                    console.log("action.payload.id", action.payload.id);
                    return { ...item, 
                        title: action.payload.newTitle,
                        settings: {
                            activated: true,
                            editable: false
                        } 
                    }
                }
                return item;
              })
              return {
                ...state,
                list
              }
            } 
    }
    else if(action.type === "ACTIVATED_ITEM_SUCCESS") {
        if(action.payload) {
        const list = state.list.map(item => {
            if(item.id === action.payload) {
                return { ...item, 
                    settings: {
                        activated: !item.settings.activated,
                        editable: false
                    } 
                }
            }
            return item;
          })
          return {
            ...state,
            list
          }
        }
    }
    return state;
}

export default listReducer;


