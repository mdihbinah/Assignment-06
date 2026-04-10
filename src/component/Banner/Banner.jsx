import React from 'react';
import banner from '../../assets/banner.png'
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
    return (
        <div className='grid md:grid-cols-2 gap-10 mx-[3%] mt-5'>
            <div className="flex justify-around items-center">
                <div className="w-[80%] flex flex-col gap-2">
                    <div className="w-[80%] flex justify-center items-center gap-5 bg-violet-200 text-violet-600 text-center rounded-4xl p-1">
                        <div className='relative flex justify-center items-center '>
                            <div class="absolute h-6 w-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full opacity-50"></div>
                            <div class="absolute h-4 w-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full opacity-70"></div>
                            <div class="absolute h-2 w-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full"></div>
                        </div>
                        <p>New: AI-Powered Tools Available</p>
                </div>

                <h1 className='text-3xl font-semibold'>Supercharge Your <br /> <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'>Digital Workflow</span></h1>
                <p className='opacity-70'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
                    <div className="flex gap-2">
                        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Explore Products</button>
                        <button className='btn btn-soft bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text rounded-full'> <CiPlay1 className='text-black'/> Watch Demo</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <img className='w-[80%] h-[95%] shadow-xl' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;