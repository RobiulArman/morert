
import { useEffect, useState } from 'react';
import './Allproducts.css';
import Singleproduct from './Singleproduct';

const Allproducts = ( {handleSelectedProduct}) => {
    console.log(handleSelectedProduct);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./fake.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <Singleproduct  handleSelectedProduct ={ handleSelectedProduct}key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
