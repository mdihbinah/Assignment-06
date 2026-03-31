import React from 'react';
import user from '../../assets/user.png'
import packages from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const Step = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 mt-10 '>
            <div className="flex flex-col justify-center items-center">
                <h1 className='text-4xl'>Get Started in 3 Steps</h1>
                <p className='opacity-70'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className="flex justify-between items-center gap-5">
                <div className="flex flex-col justify-around items-center gap-1 relative p-2 card bg-base-100 shadow-md">
                    <div className="absolute top-2 right-2 w-8 h-8 flex justify-center items-center bg-violet-600 rounded-full"><p className='text-[20px]'>01</p></div>
                    <div className="bg-violet-300 rounded-full p-3 mt-10">
                        <img className='' src={user} alt="" />
                    </div>
                    <h2 className='text-xl font-semibold text-center'>Create Account</h2>
                    <p className='w-[90%] opacity-70 text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className="flex flex-col justify-around items-center gap-1 relative p-2 card bg-base-100 shadow-md">
                    <div className="absolute top-2 right-2 w-8 h-8 flex justify-center items-center bg-violet-600 rounded-full"><p className='text-[20px]'>01</p></div>
                    <div className="bg-violet-300 rounded-full p-3 mt-10">
                        <img className='' src={packages} alt="" />
                    </div>
                    <h2 className='text-xl font-semibold text-center'>Choose Products</h2>
                    <p className='w-[90%] opacity-70 text-center'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className="flex flex-col justify-around items-center gap-1 relative p-2 card bg-base-100 shadow-md">
                    <div className="absolute top-2 right-2 w-8 h-8 flex justify-center items-center bg-violet-600 rounded-full"><p className='text-[20px]'>01</p></div>
                    <div className="bg-violet-300 rounded-full p-3 mt-10">
                        <img className='' src={rocket} alt="" />
                    </div>
                    
                    <h2 className='text-xl font-semibold text-center'>Start Creating</h2>
                    <p className='w-[90%] opacity-70 text-center'>Download and start using your premium tools immediately.</p>
                </div>
                
            </div>
        </div>
    );
};

export default Step;