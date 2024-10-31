import { useState } from 'react';
import Nav  from './Nav';
import Allproducts from './Allproducts';
import './App.css';

import Cartcontainer from './Cartcontainer';

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [price,setPrice] = useState(500);

  const handleInPrice =(pr) => {
setPrice(price + pr);
  }
  
  const handleDeletePrice =(id) => {
const product = selectedProducts.find((p) =>p.id ==id);
setPrice(price-product.price)


  }
  const handleDelete = (id) => {
    handleDeletePrice(id)
// console.log(id)
const remainingProduct = selectedProducts.filter((p) => p.id!=id);
setSelectedProducts(remainingProduct);


  }


  const handleSelectedProduct = (product) => {
    const isexist =selectedProducts.find((p)=>p.id==product.id)
    // console.log(isexist)
    if(isexist){
      alert("ar add kora jabe nah")
    }
    else {
      // console.log("naiii")

      handleInPrice(product.price)
      const newProducts = [...selectedProducts, product];
      setSelectedProducts(newProducts); // Corrected this line
    }
   
  };
  console.log(selectedProducts);

  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });

  const handleIsActiveState = (status) => {
    if (status === "cart") {
      setIsActive({
        cart: true,
        status: "active",
      });
    } else {
      setIsActive({
        cart: false,
        status: "about",
      });
    }
  };

  return (
    <>
    <Nav selectedProducts={selectedProducts} price={price}></Nav>
      <div className="flex">
        <Allproducts handleSelectedProduct={handleSelectedProduct} />
        <Cartcontainer handleDelete={handleDelete} selectedProducts={selectedProducts} isActive={isActive} handleIsActiveState={handleIsActiveState} />
      </div>
    </>
  );
}

export default App;
