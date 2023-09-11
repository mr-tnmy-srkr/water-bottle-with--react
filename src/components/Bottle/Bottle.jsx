const Bottle = ({ bottle }) => {
  // console.log(bottle);
  const { name, img, price } = bottle;
  return (
    <div className="text-2xl ">
      <h3>Bottle : {name}</h3>
      <img src={img} alt="" />
      <p>Price : ${price}</p>
    </div>
  );
};

export default Bottle;
