import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Nav = ({search, setSearch}) => {
    return (
        <nav className='nav-box'>
            <ul className='link-list'>
                <li className='link'><Link className='link-item' to='/'>Home</Link></li>
                <li className='link'><Link className='link-item' to='/Post'>Post</Link></li>
                <li className='link'><Link className='link-item' to='/About'>About</Link></li>
            </ul>
            <form className='input-box' onSubmit={(e)=> e.preventDefault()}>
                <input 
                    type="text"
                    placeholder='Search Posts'
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                    />
            </form>
        </nav>
    )
}

export default Nav
