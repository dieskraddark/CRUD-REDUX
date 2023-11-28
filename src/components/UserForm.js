import React, { useEffect, useState } from 'react'
import { addPerson, editPerson } from '../actions/Slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export default function UserForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const people = useSelector(state => state.people);
    const isEditMode = !!id; // If id has a value, isEditMode will be true; otherwise, it will be false
    const [person, setPerson] = useState({
        name: "",
        email: "",
        dob: "",
        phone: "",
        gender: "",
        option: "active",
        error: "",
        id: Date.now()
    })
    const [error, setError] = useState('');

    useEffect(() => {
        if (isEditMode) {
            const selectedPerson = people.find(person => person.id === parseInt(id));
            if (selectedPerson) {
                setPerson(selectedPerson);
            }
        }
    }, [id, people, isEditMode]);

    const emailvalidate = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email); // email validation 
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isEditMode) {
            handleEdit();
        } else {
            handleAdd();
        }
    }
    const handleAdd = () => {
        const { name, email, dob, phone, gender, option } = person;
        if (phone.length !== 10) {
            setError("please enter the valid number");
            setTimeout(() => {
                setError(null); //validation 
            }, 1800);
        }

        else if (!emailvalidate(email)) {
            setError("please enter valid email");
            setTimeout(() => {
                setError(null); //validation 
            }, 1800);
        }
        else if (!email || !phone || !dob || gender === "" || !option || name === "") {
            setError("please fill up the input forms");
            setTimeout(() => {
                setError(null); //validation 
            }, 1800);
        }

        else {
            dispatch(addPerson(person));
            console.log(person);
            goback();
            setError("");

        }
    }

    const handleEdit = () => {
        const { name, email, dob, phone, gender, option } = person;
        if (isNaN(person.phone) || person.phone.length !== 10) {
            setError("please enter the valid number");
            setTimeout(() => {
                setError(null);
            }, 1800);
        }
        else if (!emailvalidate(person.email)) {
            setError("please enter valid email");
            setTimeout(() => {
                setError(null);
            }, 1800)
        }
        else if (!person.email || !person.phone || !person.dob || person.gender === "" || person.name === "") {
            setError("please fill up the input forms");
            setTimeout(() => {
                setError(null);
            }, 1800);
        }
        else {
            dispatch(editPerson(person));
            goback();
        }

    }

    const handleChange = (e) => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value,
        });
    };

    const handleRadio = (e) => {
        setPerson({
            ...person,
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
                <input className="name" type='text' name='name' value={person.name} onChange={handleChange} placeholder='Your Name...' required />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" defaultValue={person.email} onChange={handleChange} placeholder="Your Email.." />
                <label htmlFor="dob">DOB:</label>
                <input type="date" name="dob" value={person.dob} onChange={handleChange} />
                <label htmlFor="Phone">Phone:</label>
                <input type="number" name="phone" value={person.phone} onChange={handleChange} placeholder="Your Phone.." />
                <div className="gender-dropdown-container">
                    <label htmlFor="gen" name="gen">Gender</label>
                    <select name="gender" value={person.gender} onChange={handleChange}>
                        <option value="">Select </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="radio-buttons">
                    <label className="custom-radio">
                        <input type="radio" name="option" value="active" checked={person.option === 'active'} onChange={handleRadio} />
                        Active
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="option" value="none" checked={person.option === 'none'} onChange={handleRadio} />
                        None
                    </label>
                </div>
                <button className="add-user" type="submit">{isEditMode ? 'Update' : 'Add'}</button>
                <button className="go-back" onClick={goback}> Back</button>
            </form>
        </div>
    )
}
