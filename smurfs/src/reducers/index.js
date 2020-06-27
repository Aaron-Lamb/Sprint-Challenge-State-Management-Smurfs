const initialState = {
    list: []
}

export const PersonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_LIST":
            return {
                ...state,
                list: action.payload
            }
        case "ADD_PERSON":
            return{
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            }
        default:
            return state;
    }
}