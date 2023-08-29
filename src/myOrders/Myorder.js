import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function Myorder() {
  let { cart } = useSelector((state) => state.allCart);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(cart);
  });
  return (
    <>
      {data.map((item) => {
        return (
          <div>
            <li>{item.id}</li>
            <li>{item.title}</li>
            <img src={item.img} alt="img" />
          </div>
        );
      })}
    </>
  );
}
