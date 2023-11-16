import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editPerson } from '../actions/Actions';

export default function EditUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const people = useSelector(state => state.people);

    const [editedPerson, setEditedPerson] = useState({
        name: "",
        age: "",
        grade: ""
    });
    console.log(id);

    useEffect(() => {
        const selectedPerson = people.find(person => person.id == parseInt(id));
        if (selectedPerson) {
            setEditedPerson(selectedPerson);

        }
    }, [id, people]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleEdit();
    }
    const handleEdit = () => {
        dispatch(editPerson(editedPerson));
        goback();
    }

    const handleChange = (e) => {
        setEditedPerson({
            ...editedPerson,
            [e.target.name]: e.target.value,

        });
    };


    const goback = () => {
        navigate('/');
    };


    return (
        <div className='second'>
            <h3 className='second-header'></h3>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="fname">Name</label>
                <input type="text" name="name" defaultValue={editedPerson.name} onChange={handleChange} placeholder="Your name.." />
                <label htmlFor="Age">Age</label>
                <input type="number" name="age" value={editedPerson.age} onChange={handleChange} placeholder="Your Age.." />
                <label htmlFor="Grade">Grade</label>
                <input type="text" name="grade" value={editedPerson.grade} onChange={handleChange} placeholder="Your Grade.." />
                <button className="add-user" onClick={handleEdit}>Update User</button>
                <button className="go-back" onClick={goback}>Go Back</button>
            </form>
        </div>
    )
}
