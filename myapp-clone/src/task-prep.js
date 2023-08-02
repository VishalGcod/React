import { useState } from "react";

export const Fun1 = () => {
  return (
    <nav className="navbar">
      <h1>home</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "black",
          height: "10dvh",
          color: "whitesmoke",
          fontSize: "25px",
          alignItems: "center",
          fontWeight: "700",
        }}
      >
        <a href="/">link1</a>
        <a href="/create">link2</a>
      </div>
    </nav>
  );
};

export const Fun2 = () => {
  const [fname, newfruitname] = useState("Apple");
  const [click, afterclick] = useState("CLICK1");
  const dblClick = (e) => {
    newfruitname("orange");
    var ap = e.target;
    console.log(ap);
    ap.style.color = "orange";
    ap.style.backgroundColor = "brown";
    ap.style.fontSize = "35px";
    ap.style.fontWeight = "750";
  };

  const clickHandle2 = (myName, e) => {
    afterclick("Clicked");
    alert("hello" + " " + myName);
    console.log("hello" + myName, e.target.innerHTML);
  };

  return (
    <div className="Cont">
      <h1
        style={{
          color: "orange",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Welcome to Homepage
      </h1>
      <button onClick={clickHandle}>CLICK1</button>
      <button onClick={(e) => clickHandle2("vishal", e)}>{click}</button>
      <h1 onDoubleClick={dblClick} style={{ backgroundColor: "red" }}>
        {fname}
      </h1>
    </div>
  );
};

const clickHandle = (e) => {
  console.log("btn clicked");
  console.log(e.target.closest("button").innerHTML);
};

// export const Buttonclick =() =>{
//     const [arr, mappedarr] = useState([
//         {
//           id: 1,
//           text: "hello",
//         },
//         {
//           id: 2,
//           text: "am good",
//         },
//         {
//           id: 3,
//           text: "hope you are fine",
//         },
//         {
//           id: 4,
//           text: "How are you?",
//         },
//         {
//           id: 5,
//           text: "Need Help?",
//         },
//         {
//           id: 5,
//           text: "Please contact us",
//         },
//       ]);

//     return(
//         <div className="buttons">
//             {arr.map((a)=>(
//                 <button key={a.id} onClick={text1}>{a.text}</button>
//             ))}
//         </div>
//     )
// }

// export const Btnsub=()=>{
//     return(
//         <div>
//         <button onClick={subbtn}>submit</button>
//         <button onClick={clrbtn}>clear</button>
//         </div>
//     )
// }

// let area=document.querySelector('.txtarea')
// let para=document.querySelector('.para')
// function text1(e){
//     const btnele=e.target.innerHTML
//     console.log(btnele);
//     area.innerHTML+=btnele

// }

// function subbtn(){
//     para.innerHTML+=area.innerHTML
// }

// function clrbtn(){
//     area.innerHTML='' 
//     para.innerHTML=''
// }