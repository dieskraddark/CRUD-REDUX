import React from 'react'
import { useDispatch } from 'react-redux';
import { searchPerson } from '../actions/Slice';

export default function Navbar() {

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        const query = e.target.value;
        dispatch(searchPerson(query));
    }


    return (
        <div>
            <nav>
                <div className="logo">Student Info</div>
                <div className="search-bar">
                    <input type="text" onChange={handleSearch} className="search-input" placeholder="Search..." />
                </div>

            </nav>
        </div>
    )
}
