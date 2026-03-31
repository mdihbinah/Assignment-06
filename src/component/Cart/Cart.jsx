import React, { useState } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import name1 from '../../assets/products/writing.png'
import name2 from '../../assets/products/design-tool.png'
import name3 from '../../assets/products/shopping-cart.png'
import name4 from '../../assets/products/operation.png'
import name5 from '../../assets/products/portfolio.png'
import name6 from '../../assets/products/social-media.png'

const Cart = ({totalPrice, setTotalPrice, addedNumber, setAddedNumber, addedProduct, setAddedProduct}) => {
    

    
    const icons = {
            1: name1,
            2: name2,
            3: name3,
            4: name4,
            5: name5,
            6: name6
        }

    return (
        <div className='bg-gray-100 p-5 opacity-95 rounded-2xl space-y-3'>
            <h1 className='text-xl font-bold'>Your Cart</h1>
            {
                addedProduct.map((ele, index) => {
                    return <div key={index} className="">

                        <div className={`flex justify-between items-center gap-5 border-1 rounded-xl p-3 ${addedProduct.length == 0? 'hidden' : ''}`}>
                            <div className="flex items-center gap-5">
                                <img className='w-10 h-10 rounded-full' src={icons[ele.id]} alt="" />
                                <div className="">
                                    <h1 className='text-xl'>{ele.name}</h1>
                                    <h3 className='opacity-70'>${ele.price}</h3>
                                </div>
                            </div>
                            <button onClick={() =>{handleRemove(ele)}} className='text-orange-500'>Remove</button>
                        </div>
                    </div>
                })
            }


            <div className={`space-y-3 ${addedProduct.length == 0? 'hidden' : ''}`}>
                <div className="flex justify-between items-center">
                    <h3 className='text-xl opacity-70'>Total:</h3>
                    <h1 className='text-xl font-bold'>${totalPrice}</h1>
                </div>
                <div onClick={() => {allRemove()}} className=" p-2 text-xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-center rounded-full">Proceed to Checkout</div>
            </div>

            <div className={` flex flex-col justify-center items-center gap-2 ${addedProduct.length == 0? '' : 'hidden'}`}>
                <CiShoppingCart className='w-[100px] h-[100px]' />
                <h1>Your cart is empty.</h1>
            </div>
        </div>
    );
};

export default Cart;