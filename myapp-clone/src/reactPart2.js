import { useEffect, useState } from "react";
import React from "react";
import { Blog } from "./practiceasses3";

export const Apis = () => {
  const [items, setitem] = useState([]);
  const [pending, setpending] = useState(true);
  useEffect(() => {
    // console.log('something changed');
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setitem(data);
          setpending(false);
        })
        .catch((err) => console.log(err.message));
    }, 2000);
  }, [items]);

  // const deleted=(ind)=>{
  //   const del=items.filter((_,i)=>i!=ind)
  //   setitem(del)
  // }

  return (
    <div>
      {pending && <h2>loading...</h2>}
      <Blog items={items} title="title is props!" />
    </div>
  );
};


// export const Header=()=>{
//   return(
//     <div>
//     <h1>nav</h1>
//     <div>
//     <a href="/">Home</a>
//     <a href="/create">Create</a>
//     </div>
//     </div>
//   )
// } 

export function Child(props){
  return(
    <div>
      <h1>Child</h1>
      <button onClick={()=>props.changeword('gv')}>but</button>
    </div>
  )
}