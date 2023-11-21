import React, { useState } from 'react'
import { addPerson } from '../actions/Actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';;

export default function AddUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, SetError] = useState(null);
    const [email, SetEmail] = useState("");
    const [dob, SetDob] = useState("")
    const [phone, SetPhone] = useState("")

    const goback = () => {
        navigate('/');
    }

    const emailvalidate = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const NewPerson = { id: Date.now(), email, dob, phone };
        if (phone.length !== 10) {
            SetError("please enter the valid number");
            setTimeout(() => {
                SetError(null);
            }, 1800);
        }

        else if (!emailvalidate(email)) {
            SetError("please enter valid email");
            setTimeout(() => {
                SetError(null);
            }, 1800);
        }
        else if (!email || !phone || !dob) {
            SetError("please fill up the input forms");
            setTimeout(() => {
                SetError(null);
            }, 1800);
        }

        else {
            dispatch(addPerson(NewPerson));
            console.log(NewPerson);
            goback();
            SetError("");
        }

    }

    return (
        <div className='second'>
            {error && <h3 className='second-header'>{error}</h3>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="Email" value={email} onChange={e => SetEmail(e.target.value)} placeholder="Your Email..." />
                <label htmlFor="DOB">DOB</label>
                <input type="date" name="dob" value={dob} onChange={e => SetDob(e.target.value)} />
                <label htmlFor="Phone">Phone</label>
                <input type="number" name='phone' value={phone} onChange={e => SetPhone(e.target.value)} placeholder="Your Phone.." />

                <div className="gender-dropdown-container">
                    <label htmlFor="gender" name="gender">Gender</label>
                    <select id="gender" value="name">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="radio-buttons">
                    <label className="custom-radio">
                        <input type="radio" name="option" value="option1" />
                        Active
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="option" value="option2" />
                        None
                    </label>
                </div>

                <button className="add-user" type='submit'>Add User</button>
                <button className="go-back" onClick={goback}>Go Back</button>
            </form>
        </div>
    )
} 