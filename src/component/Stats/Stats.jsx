import React from 'react';

const Stats = () => {
    return (
        <div className='flex justify-around p-4 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] m'>
            <div className="">
                <h1 className='text-xl font-bold'>50K+</h1>
                <p className='opacity-70'>Active Users</p>
            </div>
            <div class="divider divider-horizontal divider-neutral"></div>
            <div className="">
                <h1 className='text-xl font-bold'>200+</h1>
                <p className='opacity-70'>Premium Tools</p>
            </div>
            <div class="divider divider-horizontal divider-neutral"></div>
            <div className="">
                <h1 className='text-xl font-bold'>4.9</h1>
                <p className='opacity-70'>Rating</p>
            </div>
        </div>
    );
};

export default Stats;