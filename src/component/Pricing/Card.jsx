import React from 'react';
import { IoCheckmarkOutline } from "react-icons/io5";

const Card = ({card}) => {
    return (
        <div className={`relative hover:translate-y-[-10px] duration-[0.5s] flex flex-col gap-4 mx-[3%] bg-gray-100 p-3 rounded-lg ${card.badge? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white': ''}`}>
            {
                card.badge ? <div className='absolute w-[40%] bg-yellow-200 p-2 rounded-full text-center left-[30%] -top-4 text-red-500'>{card.badge}</div> :''
            }
            <h1 className='text-xl font-semibold'>{card.name}</h1>
            <p className='text-xs opacity-70'>{card.description}</p>
            <h1><span className='text-xl font-bold'>${card.price}</span><span className='text-sm opacity-70'>/{card.billing}</span></h1>
            <ul className='flex-1'>
                {
                    card.features.map((ele, index) => <li className='flex items-center' key={index}><IoCheckmarkOutline className='mr-1' />{ele}</li>)
                }
            </ul>
            <div className={`${card.badge? 'bg-white rounded-full': ''}`}>
                <div className={`text-center p-1 rounded-full ${card.badge? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text ': 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'}`}>{card.cta.text}</div>
            </div>
        </div>
    );
};

export default Card;