import axios from "axios";
import { useEffect, useState } from "react";

export const Posting = () => {
  const [data, setdata] = useState([]);
  const [dta2, setdta] = useState([]);
  const [val, setval] = useState("");

  const dta = { title: val, description: "leather", price: 70.3 };

  const add = () => {
    axios.post("http://localhost:8000/blogs", dta).then((res) => {
      setdata(res.data);
      console.log(res);
      console.log(res.data);
    });
    console.log("posted");
  };

  const inputing = (e) => {
    console.log(e.target.value);
    setval(e.target.value);
  };

  const fetching = () => {
    axios
      .get("http://localhost:8000/blogs")
      .then((res) => {
        if (res.status == 200) {
          setdta(res.data);
          console.log(res.data);
        }
      })
      .catch((err) => alert(err));
  };

  const deletreq = (dta) => {
    console.log(dta);
    axios
      .delete("http://localhost:8000/blogs/"+dta)
      .then(res=> console.log(res))
      .catch((err) => console.log(err));
  };

  const updatereq=(dta)=>{
    console.log(dta);
    const titleup=prompt('set new title')
    console.log(titleup);
    const newdata={title:titleup, description: "leather", price: 70.3}
    axios
      .put("http://localhost:8000/blogs/"+dta,newdata)
      .then(res=> console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={() => add()}>Add</button>
      <input onChange={inputing}></input>
      <button onClick={fetching}>fetch data</button>
      {dta2.map((dta,index) => (
        <div>
          <h1>{dta.title}</h1>
          <button onClick={() => deletreq(dta.id)}>delete</button>
          <button onClick={()=> updatereq(dta.id)}>Update</button>
        </div>
      ))}
    </div>
  );
};
