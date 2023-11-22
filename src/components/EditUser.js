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
        email: "",
        dob: "",
        phone: "",
        gender: "",
        option: "active"
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
            setTimeout(() => {
                SetError(null);
            }, 1800)
        }
        else if (!editedPerson.email || !editedPerson.phone || !editedPerson.dob || editedPerson.gender === "" || editedPerson.name === "") {
            SetError("please fill up the input forms");
            setTimeout(() => {
                SetError(null);
            }, 1800);
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
    const handleRadio = (e) => {
        setEditedPerson({
            ...editedPerson,
            option: e.target.value,
        });
    };

    const goback = () => {
        navigate('/');
    };


    return (
        <div className='second'>
            {error && <h3 className='second-header'>{error}</h3>}
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="email">Name:</label>
                <input className="name" type='text' name='name' value={editedPerson.name} onChange={handleChange} placeholder='Your Name...' required />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" defaultValue={editedPerson.email} onChange={handleChange} placeholder="Your Email.." />
                <label htmlFor="dob">DOB:</label>
                <input type="date" name="dob" value={editedPerson.dob} onChange={handleChange} />
                <label htmlFor="Phone">Phone:</label>
                <input type="number" name="phone" value={editedPerson.phone} onChange={handleChange} placeholder="Your Phone.." />
                <div className="gender-dropdown-container">
                    <label htmlFor="gen" name="gen">Gender</label>
                    <select name="gender" value={editedPerson.gender} onChange={handleChange}>
                        <option value="">Select </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="radio-buttons">
                    <label className="custom-radio">
                        <input type="radio" name="option" value="active" checked={editedPerson.option === 'active'} onChange={handleRadio} />
                        Active
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="option" value="none" checked={editedPerson.option === 'none'} onChange={handleRadio} />
                        None
                    </label>
                </div>
                <button className="add-user" onClick={handleEdit}>Update User</button>
                <button className="go-back" onClick={goback}>Go Back</button>
            </form>
        </div>
    )
}
