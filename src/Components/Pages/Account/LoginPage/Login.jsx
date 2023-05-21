import React from 'react';
import loginImage from '../../../../img/login.png'

const Login = () => {
    return (
        <div className='flex'>
            <div className='w-3/12 shadow-xl'>
                <div className='py-3 px-6'>
                    <form action="">
                        <label 
                        className='font-mono' 
                        htmlFor="email">Email
                            <input
                                type='email'
                                name='email'
                                placeholder="Email"
                                id='email'
                                required
                                className='border p-2 w-full' />
                        </label>
                        <label 
                        className='font-mono'
                        htmlFor="email">Password
                            <input
                                type='Password'
                                name='email'
                                placeholder="Password"
                                id='email'
                                required
                                className='border p-2 w-full' />
                        </label>
                        <div className='text-center mt-5'>
                            <input
                                type="submit"
                                value="Login Now"
                                className='btn border border-colors-accent py-2 px-3 font-mono' />
                        </div>
                    </form>
                    <div className='flex justify-center items-center mt-10'>
                        <hr  className='border border-t-10 w-full'/>
                        <span className='text-4xl mx-7'>Or</span>
                        <hr className='border border-t-10 w-full'/>
                    </div>
                    <div className='flex gap-3 justify-center mt-7'>
                        <span className='border text-colors-accent border-colors-blck text-center py-2 px-4 font-mono'> google</span>
                        <span className='border text-colors-accent border-colors-blck text-center py-2 px-4 font-mono'> github</span>
                        <span className='border text-colors-accent border-colors-blck text-center py-2 px-4 font-mono'> facebook</span>
                    </div>
                </div>
            </div>
            <div className='w-9/12 flex items-end justify-end'>
                <img className='h-full object-cover' src={loginImage} alt="" />
            </div>
        </div>
    )
}
export default Login