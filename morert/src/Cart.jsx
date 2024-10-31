// import React from 'react';
import './Cart.css'
const Cart = ({ selectedProducts,handleDelete }) => {
    // console.log(selectedProducts);
    return (
        <div>
            {selectedProducts.map((product) => (
                <div className="m-4">
                    <div>
                        <img src={product.cover} className="img" alt="" />
                        <p>{product.author}</p>
                        <p>{product.price}</p>
                        <button onClick={() =>handleDelete(product.id)} className='border-solid border-2 border-sky-500 bg-slate-500'>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
