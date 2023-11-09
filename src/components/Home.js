import React, { useState } from 'react'
import { useDispatch ,useEffect } from 'react-redux'
import { useNavigate } from 'react-router-dom';



export default function Home() {
    const[input, SetInput] = useState("");
    const [error, SetError] = useState(null);
    const navigate= useNavigate();
    // const dispatch = useDispatch();

    const addclick=()=>{
        navigate('/addUser');
    };

    // const dispatch = useDispatch();
    return (
        <div className='container'>
            <h1 className='emp'>Student Data</h1>
            <table id='customers'>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>GRADE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                   
                        
                            <tr >
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button className="edit-button" >Edit</button>
                                    <button className="delete-button"  >Delete</button></td>
                            </tr>
                        
                </tbody>
            </table>
            <div className="add">
                <button className="add-button"  onClick={addclick}>Add User</button>
            </div>
        </div>
    )
}
