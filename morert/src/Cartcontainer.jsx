import './Cartcontainer.css';
import Cart from './Cart';
import About from './About';



const Cartcontainer = ({ handleIsActiveState, isActive, selectedProducts,handleDelete}) => {
  console.log(isActive);

  return (
    <div>
      <h1>Products</h1>

      <div className="grid grid-cols-3 gap-3 my-3 border-solid border-2 border-sky-500 cursor-pointer">
        <div
          onClick={() => handleIsActiveState("cart")}
          className={`${isActive.cart ? "btn active" : "btn"}`}
        >
          CART
        </div>
        <div
          onClick={() => handleIsActiveState("about")}
          className={`${isActive.cart ? "btn " : "active btn"}`}
        >
          ABOUT
        </div>
      </div>
      {
        isActive.cart?<Cart handleDelete={handleDelete} selectedProducts={selectedProducts}></Cart>:<About></About>
      }
    </div>
  );
};

export default Cartcontainer;
