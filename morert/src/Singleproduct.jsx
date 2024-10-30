// import React from 'react';
import './product.css'
// import Singleproduct from './Singleproduct';
const Singleproduct = ({product, handleSelectedProduct}) => {
    const{author,author_img,cover,hastags,id,posted_date,title,price}=product
    // console.log(product)

    return (
        <div className='card'>
            <img src={cover} alt />
            <h2>{title}</h2>
            <h2>${price}</h2>
            <button onClick={()=> handleSelectedProduct(product)} className='"border-solid border-2 border-sky-500 bg-slate-500'>
                Add to Cart
            </button>
        </div>
    );
};

export default Singleproduct;