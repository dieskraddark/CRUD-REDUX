export const addPerson = (person) => {
    return {
        type: 'ADD_PERSON',
        payload: person

    }
    console.log("asp", addPerson.payload);
}


export const removePerson = (personId) => {
    return {
        type: 'REMOVE_PERSON',
        payload: personId,
    }
};

export const editPerson = (updatedPerson) => {

    return {
        type: 'EDIT_PERSON',
        payload: updatedPerson,
    }

};