import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { removePerson } from '../actions/Slice';
import { useEffect } from 'react';
import { addPerson } from '../actions/Slice';

export default function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const hasData = useSelector((state) => state.people.length > 0);
    
    useEffect(() => {
        if (!hasData) {
            fetch("https://reqres.in/api/users?page=1")
                .then((response) => response.json())
                .then((totaldata) => {
                    const users = totaldata.data.map(user => ({
                        id: user.id,
                        first: user.first_name,
                        last: user.last_name,
                        email: user.email
                    }));
                    users.forEach(user => dispatch(addPerson(user)));
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    }, [hasData]);
    const handleDelete = (id) => {
        if (window.confirm("Delete the item?")) {
            dispatch(removePerson(id))
        } else {
            alert("Cancelled")
        }
    }
    const addclick = () => {
        navigate('/addUser');
    };
    const people = useSelector(state => state.people);
    const search = useSelector(state => state.searchQuery);

    const filteredPeople = people.filter(
        (person) =>
            person.first && person.first.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className='container'>
            <h1 className='emp'>Student Data</h1>
            <table id='customers'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Users Action</th>
                        <th>Job</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPeople.map((pop, index) =>
                    (
                        <tr key={`${pop.id}_${index}`}>
                            <td>{pop.first}</td>
                            <td>{pop.last}</td>
                            <td>{pop.email}</td>
                            <td>{pop.phone}</td>
                            <td>{pop.gender}</td>
                            <td>{pop.option}</td>
                            <td>{pop.job}</td>
                            <td>
                                <button className="edit-button" onClick={() => navigate(`/editUser/${pop.id}`)} >Edit</button>
                                <button className="delete-button" onClick={() => handleDelete(pop.id)}>Delete</button>
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
