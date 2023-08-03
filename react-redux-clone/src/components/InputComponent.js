import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInput, addToArr } from "../redux/inputAction";

function InputComponent() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.obj.arr);
  console.log(data);
  // const [inputdata, setinputdata] = useState("");
  // const [inputdata2, setinputdata2] = useState("");
  // const [arrayData, getarrayData] = useState([]);

  // const textchange1 = (e) => {
  //   setinputdata(e.target.value);
  //   console.log(e.target.value);
  // };
  // const textchange2 = (e) => {
  //   setinputdata2(e.target.value);
  //   console.log(e.target.value);
  // };
  const submittedform = (e) => {
    e.preventDefault();
    // const inputArray = {
    //   inputdata,
    //   inputdata2,
    // };
    dispatch(addToArr([...data, formData]));
    // dispatch(addToArr(data));
  };

  // const submitSecondForm = (e) => {
  //   e.preventDefault();
  // };

  const [formData, setFormData] = useState({
    firstname: "",
    age: "",
  });

  const textchange1 = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={submittedform}>
        <input
          name="firstname"
          value={formData.firstname}
          type="text"
          placeholder="enter name"
          onChange={textchange1}
        ></input>
        <input
          name="age"
          value={formData.age}
          type="number"
          placeholder="enter age"
          onChange={textchange1}
        ></input>
        <button type="submit">Submit</button>
      </form>
      {/* <form onSubmit={submitSecondForm}>
        <input
          type="text"
          placeholder="fname"
          name="firstname"
          value={formData.firstname}
          onChange={newInputChange}
        ></input>
        <input
          type="text"
          placeholder="lname"
          name="lastname"
          value={formData.lastname}
          onChange={newInputChange}
        ></input>
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}

export default InputComponent;
