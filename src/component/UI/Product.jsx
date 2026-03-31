import React, { useState } from 'react';
import { TiTickOutline } from "react-icons/ti";
import name1 from '../../assets/products/writing.png'
import name2 from '../../assets/products/design-tool.png'
import name3 from '../../assets/products/shopping-cart.png'
import name4 from '../../assets/products/operation.png'
import name5 from '../../assets/products/portfolio.png'
import name6 from '../../assets/products/social-media.png'


const Product = ({totalPrice, setTotalPrice, addedNumber, setAddedNumber, product, addedProduct, setAddedProduct}) => {
    const handleCart = (product) => {
        product.isAdded = true
        setAddedProduct([...addedProduct, product])
        setAddedNumber(x => x + 1)
        setTotalPrice(totalPrice + product.price)
    }

    const icons = {
        1: name1,
        2: name2,
        3: name3,
        4: name4,
        5: name5,
        6: name6
    }

    return (
        <div>
            <div className=" flex flex-col card min-h-95 min-w-60 border-2 p-4 space-y-1 rounded-xl relative">
                <button className={`btn ${product.tag == 'Popular'? 'btn-secondary' : (product.tag == 'New' ? 'btn-accent' : 'btn-warning')} text-black absolute top-1 right-1`}>{product.tag}</button>
                <img className='w-8 h-8 mt-10' src={icons[product.id]} alt="" />
                <h1 className='text-xl font-semibold'>{product.name}</h1>
                <p className='text-xs opacity-70'>{product.description}</p>
                <h2 className='my-2'><span className='text-xl font-semibold'>${product.price}</span><span className='text-xl opacity-70'>/{product.period}</span></h2>
                <ul className='flex-1'>
                    {product.features.map((ele, index) => <li key={index} className='flex items-center'><TiTickOutline />{ele}</li>)}
                </ul>
                <div onClick={()=> {product.isAdded?'':handleCart(product)}} className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-2 rounded-full text-center text-white'>{product.isAdded? 'Added to Cart': 'Buy Now'}</div>
            </div>
        </div>
    );
};

export default Product;