import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddUser() {
    const navigate = useNavigate();

const goback=()=>{
    navigate('/');
}

    return (
        <div className='second'>
            <h3 className='second-header'></h3>
            <form>
                <label for="fname">Name</label>
                <input type="text" id="fname" name="name" placeholder="Your name.." />
                <label for="Age">Age</label>
                <input type="number" id="Age" name="age" placeholder="Your Age.." />
                <label for="Grade">Grade</label>
                <input type="text" id="grade" name="grade" placeholder="Your Grade.." />
                <button className="add-user" type='submit'>Add User</button><button className="go-back" onClick={goback}>Go Back</button>
            </form>
        </div>
    )
}
