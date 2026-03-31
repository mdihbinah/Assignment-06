import React, { act, use, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Main = ({active, setActive, totalPrice, setTotalPrice, addedNumber, setAddedNumber, mainData}) => {
    const products = use(mainData)
    // console.log(mdata);
    const [addedProduct, setAddedProduct] = useState([])
    const handleProducts = (bool) => {
        setActive(bool)
    }
    return (
        <div className="">
            <div className='mt-[50px] space-y-10'>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                    <h1 className='text-xl font-semibold'>Premium Digital Tools</h1>
                    <p className='w-[40%] text-xs opacity-70'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                    
                    <div className="">
                        <button onClick={() => {handleProducts(true)}} className={`px-4 py-2 ${active ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white': ''}`}>Products</button>
                        <button onClick={() => {handleProducts(false)}} className={`px-4 py-2 ${active ? '' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white'}`}>Cart ({addedNumber})</button>
                    </div>
                </div>
                <div className="mx-[3%]">
                    {
                        active? <Products totalPrice={totalPrice} setTotalPrice={setTotalPrice} addedNumber={addedNumber} setAddedNumber={setAddedNumber} products={products} addedProduct={addedProduct} setAddedProduct ={setAddedProduct} /> : <Cart totalPrice={totalPrice} setTotalPrice={setTotalPrice} addedNumber={addedNumber} setAddedNumber={setAddedNumber} addedProduct={addedProduct} setAddedProduct ={setAddedProduct} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;