import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'


export default function Home() {
    const [error, SetError] = useState(null);
    const navigate = useNavigate();


    const addclick = () => {
        navigate('/addUser');
    };
    const people = useSelector(state => state.people)

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
                    {people.map((pop) => (
                        <tr key={pop.id}>
                            <td>{pop.name}</td>
                            <td>{pop.age}</td>
                            <td>{pop.grade}</td>
                            <td>
                                <button className="edit-button">Edit</button>
                                <button className="delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
            <div className="add">
                <button className="add-button" onClick={addclick}>Add User</button>
            </div>
        </div>
    )
}
