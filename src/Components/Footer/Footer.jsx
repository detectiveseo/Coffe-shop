import React from 'react';
import logo from '../../assets/Amaya-logo-white-1.png'

const Footer = () => {
    return (
        <div className='bg-colors-blck text-colors-white'>
            <div className='w-11/12 mx-auto'>
                <div className='flex justify-between pt-20 w-6/12 mx-auto'>
                    <div>
                        <h5 className='text-mono text-2xl font-bold mb-3'>ABOUT</h5>
                        <ol className='font-extralight'>
                            <li>THE COMPANY</li>
                            <li>FAQ</li>
                            <li>PRIVACY POLICY</li>
                        </ol>
                    </div>
                    <div>
                        <h5 className='text-mono  text-2xl font-bold mb-3'>LOCATION</h5>
                        <ol className='font-extralight'>
                            <li>SAN FRANCISCO</li>
                            <li>NEWPORT BEACH</li>
                            <li>SUN CITY</li>
                        </ol>
                    </div>
                    <div>
                        <h5 className='text-mono  text-2xl font-bold mb-3'>Follow Us</h5>
                        <ol className='font-extralight'>
                            <li>THE COMPANY</li>
                            <li>THE COMPANY</li>
                            <li>THE COMPANY</li>
                        </ol>
                    </div>
                </div>

                <div className='flex justify-between items-center py-10'>
                    <span>© 2020 AMAYA. ALL RIGHTS RESERVED.
                    </span>
                    <img width="150px" src={logo} alt="" />
                    <span>♥️ BECAUSE WE LOVE COFFEE</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;