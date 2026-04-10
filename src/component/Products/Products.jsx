import React from 'react';
import Product from '../UI/Product';

const Products = ({totalPrice, setTotalPrice, addedNumber, setAddedNumber, products, addedProduct, setAddedProduct}) => {
    
    return (
        <div className='bg-gray-100 p-5 rounded-2xl grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-[3%]'>
            {
                products.map((product, index) => <Product key={index} totalPrice={totalPrice} setTotalPrice={setTotalPrice} addedNumber={addedNumber} setAddedNumber={setAddedNumber} product={product} addedProduct={addedProduct} setAddedProduct ={setAddedProduct} /> )
            }
        </div>
    );
};

export default Products;