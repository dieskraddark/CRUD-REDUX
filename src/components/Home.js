import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removePerson } from '../actions/Slice';

export default function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
            person.name.toLowerCase().includes(search.toLowerCase())
    );



    return (
        <div className='container'>
            <h1 className='emp'>Student Data</h1>
            <table id='customers'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>D.O.B</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Users Action</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPeople.map((pop) => (
                        <tr key={pop.id}>
                            <td>{pop.name}</td>
                            <td>{pop.email}</td>
                            <td>{pop.dob}</td>
                            <td>{pop.phone}</td>
                            <td>{pop.gender}</td>
                            <td>{pop.option}</td>
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
