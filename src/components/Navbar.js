import React from 'react'
import { useDispatch } from 'react-redux';
import { searchPerson } from '../actions/Actions';

export default function Navbar() {

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        const query = e.target.value;
        dispatch(searchPerson(query));
    }


    return (
        <div>
            <nav>
                <div class="logo">Student Info</div>
                <div class="search-bar">
                    <input type="text" onChange={handleSearch} class="search-input" placeholder="Search..." />
                </div>

            </nav>
        </div>
    )
}
