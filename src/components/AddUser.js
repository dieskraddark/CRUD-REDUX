import React, { useState } from 'react'
import { addItems } from '../actions/Actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';;

export default function AddUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [age, setAge] = useState("")
    const [grade, setGrade] = useState("")

    const goback = () => {
        navigate('/');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const NewPerson = { id: Date.now(), name, age, grade };
        dispatch(addItems(NewPerson));
    }

    return (
        <div className='second'>
            <h3 className='second-header'></h3>
            <form onSubmit={handleSubmit}>
                <label htmlfor="fname">Name</label>
                <input type="text" id="fname"  value={name} onChange={e => setName(e.target.value)} placeholder="Your name.." />
                <label htmlfor="Age">Age</label>
                <input type="number" id="Age" value={age} onChange={e => setAge(e.target.value)} placeholder="Your Age.." />
                <label htmlfor="Grade">Grade</label>
                <input type="text" id="grade" value={grade} onChange={e => setGrade(e.target.value)} placeholder="Your Grade.." />
                <button className="add-user" type='submit'>Add User</button><button className="go-back" onClick={goback}>Go Back</button>
            </form>
        </div>
    )
}
