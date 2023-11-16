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
            const NewPeople = state.people.filter(person => person.id !== action.payload)
            return {
                ...state,
                people: NewPeople


            };

        case 'EDIT_PERSON':
            const updatedPeople = state.people.map(person =>
                person.id === action.payload.id ? action.payload : person
            );
            return {
                ...state,
                people: updatedPeople,
            };
        default:
            return state;
    }
};
