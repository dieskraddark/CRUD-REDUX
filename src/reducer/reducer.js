const initialState = {
    people: [],
};

 export const crudReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            return {
                ...state,
                people: [
                    ...state.people,
                    action.payload
                ]
            }
        case 'REMOVE_PERSON':
            return {
                ...state,
            }

        case 'EDIT_PERSON':
            return {
                ...state,
            }
        default:
            return state;
    }
};
