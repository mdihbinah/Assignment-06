import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='flex justify-between p-8 mx-[20%] text-white'>
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
        </div>
    );
};

export default Stats;