import React, { useState } from 'react';
import { CiMenuFries, CiShoppingCart } from "react-icons/ci";

const Navbar = ({addedNumber, setAddedNumber}) => {
    const [show, setShow] = useState(false)

    return (
        <div className="flex justify-between items-center p-3 bg-base-100 shadow-sm mx-[3%]">
            <div className="relative flex justify-between gap-3">
                <button className='lg:hidden' onClick={() => {setShow(!show)}} ><CiMenuFries/></button>
                <div className={`absolute -bottom-53 bg-red-400 p-2 text-center rounded-[5px] ${show ? '' : 'hidden'}`}>
                    <ul className='flex flex-col gap-5'>
                        <li><a href="">Products</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul> 
                </div>
                <a className="text-xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">DigiTools</a>
            </div>

            <div className="hidden lg:flex">
               <ul className='flex gap-5'>
                <li><a href="">Products</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Testimonials</a></li>
                <li><a href="">FAQ</a></li>
                </ul> 
            </div>


            <div className="flex">
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                    <div className="indicator mr-5">
                    <CiShoppingCart className='w-[30px] h-[30px]' />
                    <span className={`badge badge-sm indicator-item bg-yellow-200 ${addedNumber == 0? 'hidden' : ''}`} >{addedNumber}</span>
                    </div>
                </div>
                {/* <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                    <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                    </div>
                </div> */}
                </div>
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" >
                    {/* className="avatar" */}
                    <div className="flex gap-2">
                       <button className='btn btn-ghost btn-circle'>Login</button> 
                       <button className='btn btn-ghost bg-linear-to-r from-violet-800 to-violet-500 text-white'>Get Started</button> 
                    </div>
                </div>
                {/* <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;