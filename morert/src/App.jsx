import { useState } from 'react';
import Allproducts from './Allproducts';
import './App.css';
import Cartcontainer from './Cartcontainer';

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectedProduct = (product) => {
    const isexist =selectedProducts.find((p)=>p.id==product.id)
    // console.log(isexist)
    if(isexist){
      alert("ar add kora jabe nah")
    }
    else {
      // console.log("naiii")
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
      <div className="flex">
        <Allproducts handleSelectedProduct={handleSelectedProduct} />
        <Cartcontainer isActive={isActive} handleIsActiveState={handleIsActiveState} />
      </div>
    </>
  );
}

export default App;
