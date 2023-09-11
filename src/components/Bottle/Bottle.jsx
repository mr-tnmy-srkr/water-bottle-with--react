/* eslint-disable react/prop-types */
const Bottle = ({ bottle ,handleAddToCart}) => {
  // console.log(bottle);
  const { name, img, price } = bottle;
  return (
    <div className="text-2xl text-center space-y-4 border-4 border-sky-500 rounded-xl">
      <h3 className="my-4">Bottle : {name}</h3>
      <img className="w-11/12 mx-auto rounded-xl" src={img} alt="" />
      <p className="text-red-900 ">Price : ${price}</p>
      <div className="pb-4">
      <button onClick={handleAddToCart} className="btn btn-primary capitalize">Purchase</button>
      </div>
    </div>
  );
};

export default Bottle;
