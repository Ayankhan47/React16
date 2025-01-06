import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className='h-[3vw] w-full bg-black flex items-center justify-between px-3 text-white'>
            <h1>FlexStore</h1>
            <input className='h-[2vw] px-6 w-[20vw] rounded-xl outline-none text-black ' type="text" placeholder='Search'/>
            <div className="left flex items-center justify-center gap-10">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Product">Product</Link>
            </div>
        </div>
    );
}

export default Nav;
