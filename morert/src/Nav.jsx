// import React from 'react';
import './Nav.css'

const Nav = ({selectedProducts,price}) => {
    return (
        <div className='grid grid-cols-3 gap-3 my-3 border-solid border-2 border-sky-500 cursor-pointer'>
            <div>
                Logo
            </div>
            <div className='flex justify-around list-none'>
                <li>Home</li>
                <li>Product</li>
                <li>Cart  {selectedProducts.length}</li>
                <li>$ {price}</li>
            </div>
        </div>
    );
};

export default Nav;