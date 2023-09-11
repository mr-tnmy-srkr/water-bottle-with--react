import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

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

  //cart parent to child (need to focus)
  const handleAddToCart = (bottle) => {
    // console.log(bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
    <>
      <h2 className="text-4xl mb-6 text-primary ">
        Bottles Available : {bottles.length}
      </h2>
      <h4 className="mb-5 text-2xl text-secondary">Cart : {cart.length}</h4>
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
