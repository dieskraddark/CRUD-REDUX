import React from 'react'
import { useDispatch } from 'react-redux';
import { searchPerson } from '../actions/Slice';
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        const query = e.target.value;
        dispatch(searchPerson(query));
    }


    return (
        <div>
            <nav>
                <div className="logo">
                <Link to="/" className='logo'> Student Info </Link> </div>
                <div className="search-bar">
                    <input type="text" onChange={handleSearch} className="search-input" placeholder="Search..." />
                </div>

            </nav>
        </div>
    )
}
