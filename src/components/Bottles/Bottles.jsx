import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

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

  return (
  <>
        <h2 className="text-4xl mb-6 text-blue-900">Bottles Here : {bottles.length}</h2>
    <div className="grid grid-cols-3 gap-6">
      {bottles.map((bottle) => (
        <Bottle key={bottle.key} bottle={bottle}></Bottle>
      ))}
    </div>
  </>
  );
};

export default Bottles;
