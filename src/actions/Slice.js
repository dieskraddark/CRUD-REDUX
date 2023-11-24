import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people: [],
    searchQuery: ''
};

const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        addPerson: (state, action) => {
            state.people.push(action.payload);
        },
        removePerson: (state, action) => {
            state.people = state.people.filter(person => person.id !== action.payload);
        },
        editPerson: (state, action) => {
            state.people = state.people.map(person =>
                person.id === action.payload.id ? action.payload : person
            );
        },
        searchPerson: (state, action) => {
            state.searchQuery = action.payload;
        }
    }
});

export const { addPerson, removePerson, editPerson, searchPerson } = studentSlice.actions;
export default studentSlice.reducer;