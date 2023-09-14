import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import {
  addToLocalStorage,
  getStoredCart,
  removeFromLocalStorage,
} from "../../utilities/LocalStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  //cart parent to child (need to focus)
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const URL = ``
        const res = await fetch("bottles.json");
        const data = await res.json();
        // console.log(data);
        setBottles(data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, []);

  //   load cart from localStorage
  useEffect(() => {
    // console.log("called the useEffect", bottles.length);
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      //   console.log(storedCart, bottles);
      const savedCart = [];
      for (const id of storedCart) {
        // console.log(id);
        const bottle = bottles.find((b) => b.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      // console.log("saved cart", savedCart);
      setCart(savedCart);
    }
  }, [bottles]);

  //cart parent to child (need to focus)
  const handleAddToCart = (bottle) => {
    // console.log(bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
    // add to localStorage
    addToLocalStorage(bottle.id);
  };

//   cart remove
  const handleRemoveFromCart = (id) => {
    //visual cart remove
    console.log(cart,id);
    const remainingCart = cart.filter((b) => b.id !== id);
    setCart([...remainingCart]);
  /*   setCart((previousCart) => {
      const filtered = previousCart.filter(b => b.id !== id);
      const updatedCart = [...filtered]
      return updatedCart;
    }) */
    //remove from LS
    removeFromLocalStorage(id);
  };

  return (
    <>
      <h2 className="text-4xl mb-6 text-primary ">
        Bottles Available : {bottles.length}
      </h2>
      {/* cart from localStorage on next time visit in web */}
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <h4 className="mb-5 text-2xl text-secondary">
        cart length : {cart.length}
      </h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={() => handleAddToCart(bottle)}
          ></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottles;
