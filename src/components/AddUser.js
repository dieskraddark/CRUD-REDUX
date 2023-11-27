import React, { useState } from 'react'
import { addPerson } from '../actions/Slice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';;

export default function AddUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, Setname] = useState("")
    const [error, SetError] = useState(null);
    const [email, SetEmail] = useState("");
    const [dob, SetDob] = useState("");
    const [phone, SetPhone] = useState("");
    const [gender, SetGender] = useState("");
    const [option, SetOption] = useState("option1")

    const goback = () => {
        navigate('/');
    }

    const emailvalidate = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email); // email validation 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const NewPerson = { id: Date.now(), name, email, dob, phone, gender, option };
        if (phone.length !== 10) {
            SetError("please enter the valid number");
            setTimeout(() => {
                SetError(null); //validation 
            }, 1800);
        }

        else if (!emailvalidate(email)) {
            SetError("please enter valid email");
            setTimeout(() => {
                SetError(null); //validation 
            }, 1800);
        }
        else if (!email || !phone || !dob || gender === "" || !option || name === "") {
            SetError("please fill up the input forms");
            setTimeout(() => {
                SetError(null); //validation 
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
                <label htmlFor="name">Name</label>
                <input className="name" type='text' name='fname' value={name} onChange={e => Setname(e.target.value)} placeholder='Your Name...' required />
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={e => SetEmail(e.target.value)} placeholder="Your Email..." />
                <label htmlFor="DOB">DOB</label>
                <input type="date" name="dob" value={dob} onChange={e => SetDob(e.target.value)} />
                <label htmlFor="Phone">Phone</label>
                <input type="number" name='phone' value={phone} onChange={e => SetPhone(e.target.value)} placeholder="Your Phone.." />

                <div className="gender-dropdown-container">
                    <label htmlFor="gender" name="gender">Gender</label>
                    <select value={gender} onChange={e => SetGender(e.target.value)}>
                        <option value="">Select </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="radio-buttons">
                    <label className="custom-radio">
                        <input type="radio" name="option" value="active" checked={option === "active"} onChange={() => { SetOption("active") }} />
                        Active
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="option" value="none" checked={option === 'none'} onChange={() => { SetOption("none") }} />
                        None
                    </label>
                </div>

                <button className="add-user" type='submit'>Add</button>
                <button className="go-back" onClick={goback}>Back</button>
            </form>
        </div>
    )
} 