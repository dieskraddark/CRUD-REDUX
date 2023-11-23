export const addPerson = (person) => {
    return {
        type: 'ADD_PERSON',
        payload: person

    }

}

export const removePerson = (personId) => {
    return {
        type: 'REMOVE_PERSON',
        payload: personId,
    }
};

export const editPerson = (editedPerson) => {

    return {
        type: 'EDIT_PERSON',
        payload: editedPerson,
    }

};
export const searchPerson = (query) => {
    return {
        type: 'SEARCH_PERSON',
        payload: query,
    }
};