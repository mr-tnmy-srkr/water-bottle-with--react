// checking
const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveCartToLocalStorage = (cart) => {
  const cardStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cardStringified);
};

const addToLocalStorage = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  //save to local storage
  saveCartToLocalStorage(cart);
};

const removeFromLocalStorage = id =>{
    const cart = getStoredCart();
    //removing every id
    const remaining = cart.filter(idx => idx !== id)
    saveCartToLocalStorage(remaining)
}
export {addToLocalStorage,getStoredCart,removeFromLocalStorage}