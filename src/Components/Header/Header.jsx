import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Amaya-logo.png'

const Header = () => {
    return (
        <div>
            <div className='text-center py-1 bg-colors-secondary text-colors-white font-mono'><span>FREE SHIPPING ON ORDERS OF $35+
            </span></div>

            <nav className=' shadow-sm'>
                <div className='flex justify-between items-center uppercase font-bold w-11/12 mx-auto h-20'>
                    <div className='flex gap-4'>
                        <Link to="/">Home</Link>
                        <Link to="/">Coffes</Link>
                        <Link to="/">Service</Link>
                    </div>
                    <div>
                        <Link to="/"><img width="150px" src={logo} alt="" /></Link>
                    </div>
                    <div className='flex gap-4'>
                        <Link to="/login">Login</Link>
                        <Link to="/registration">Registration</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;