/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cart = ({ cart, handleRemoveFromCart }) => {
  // console.log(cart);
  return (
    <div>
      <h4>Cart : {cart.length}</h4>
      <div className="w-[100px] flex gap-4">
        {cart.map((bottle) => (
          <div key={bottle.id}>
            <img className="mt-4" src={bottle.img}></img>
            <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
