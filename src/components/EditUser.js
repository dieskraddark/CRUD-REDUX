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
        email: "",
        dob: "",
        phone: ""
    });
    const [error, SetError] = useState(null);

    const emailvalidate = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

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
        if (isNaN(editedPerson.phone) || editedPerson.phone.length !== 10) {
            SetError("please enter the valid number");
            setTimeout(() => {
                SetError(null);
            }, 1800);
        }
        else if (!emailvalidate(editedPerson.email)) {
            SetError("please enter valid email");
        }
        else {
            dispatch(editPerson(editedPerson));
            goback();
        }

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
            {error && <h3 className='second-header'>{error}</h3>}
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" defaultValue={editedPerson.email} onChange={handleChange} placeholder="Your Email.." />
                <label htmlFor="dob">DOB</label>
                <input type="date" name="dob" value={editedPerson.dob} onChange={handleChange} />
                <label htmlFor="Phone">Phone</label>
                <input type="number" name="phone" value={editedPerson.phone} onChange={handleChange} placeholder="Your Phone.." />
                <button className="add-user" onClick={handleEdit}>Update User</button>
                <button className="go-back" onClick={goback}>Go Back</button>
            </form>
        </div>
    )
}
