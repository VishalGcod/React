import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editToArr ,addToArr , updateData } from "../redux/inputAction";

export function InputDisplay() {
  //   const dataArr = useSelector((state) => state.obj.arr);
  const data = useSelector((state) => state.obj.arr);
  const dispatch = useDispatch();

  function clickToDelete(index) {
    console.log(index);
    const delitedData = data.filter((_, i) => i !== index);
    console.log(delitedData);
    dispatch(editToArr(delitedData));
  }

  const clickEdit = (e) => {
    console.log(e.firstname);
    console.log(e.age);
    // const obj = {
    //   firstname: "updated",
    //   age: 100,
    // };
    // dispatch(updateData(obj));
  };

  return (
    <div>
      {data.map((e, index) => (
        <div key={index}>
          <h1>{e.firstname}</h1>
          <h1>{e.age}</h1>
          <button onClick={() => clickToDelete(index)}>Delete</button>
          <button onClick={() => clickEdit(e)}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default InputDisplay;
