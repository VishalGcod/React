import { useEffect, useState } from "react";
import axios from "axios";

export const Next = () => {
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setdata(res.data);
      console.log(res.data);
    });
  }, []);

  const [data, setdata] = useState([]);
  const [next, setnext] = useState(1);

  const handlechange = () => {
    setnext(next + 4);
    console.log(next);
  };

  return (
    <div>
      <button onClick={() => handlechange()}>NEXT PAGE</button>
    </div>
  );
};
