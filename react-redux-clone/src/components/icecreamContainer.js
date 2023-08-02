import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addIcecream,
  delIcecream,
  multiIcecream,
} from "../redux/icecream/icecreamAction";

function IcecreamContainer() {
  const select = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Icecreams Added: {select}</h1>
      <button onClick={() => dispatch(addIcecream())}>ADD ICECREAM</button>
      <button onClick={() => dispatch(delIcecream())}>DEL ICECREAM</button>
      <button onClick={() => dispatch(multiIcecream())}>MULTI ICECREAM</button>
    </div>
  );
}

export default IcecreamContainer;
