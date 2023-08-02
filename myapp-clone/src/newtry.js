import { Table } from "antd";
import axios from "axios";
import react, { useEffect, useState } from "react";
import { styled } from "styled-components";
import itachi from "./itachi-uchiha-naruto-minimal-art-red-background-5k-2880x1800-7749.jpg";

export const Disp = () => {
  const [data, setdata] = useState("");

  const getimput = (e) => {
    console.log(e.target.value);
  };

  const submit = () => {
    console.log("submitted");
  };

  const Imp = () => {
    return (
      <div>
        <input type="submit" value={"Submit"} />
      </div>
    );
  };

  const [axdta, setaxdta] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setaxdta(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getdata = (content) => {
    console.log("posting present data...");
    const d = {
      title: content.title,
      price: content.price,
      category: content.category,
    };
    axios
      .post("https://fakestoreapi.com/products", d)
      .then((res) => {
        if (res.status == 200) {
          console.log(res);
          console.log(res.data);
          alert("successful");
        }
      })
      .catch((err) => alert(err));
  };

  const[sdta,getsdta]=useState('')
  const searchdata=(e)=>{
    getsdta(e.target.value)
  }
  const clicking=()=>{

  }

  return (
    <div>
      <Header>
        <Imgdiv>
          <img
            src={itachi}
            alt="image"
            style={{ height: "65px", width: "65px", borderRadius: "50%" }}
          ></img>
        </Imgdiv>
        <Impdiv>
        <input type="search" placeholder="search" style={{height:'23px'}} onChange={searchdata}></input>
        <button onClick={clicking}>search</button>
        </Impdiv>
        <Nav>
          <span>Home</span>
          <span>Login</span>
        </Nav>
      </Header>
      <h1 style={{ marginTop: "10%" }}>Products</h1>
      <GridDiv>
        {axdta?.map((a, index) => (
          <GridDivIn key={index}>
            <div style={{}}>
              <Images src={a.image}></Images>
            </div>
            <h1>
              {a.id} . {a.title.substring(0, 12)}
            </h1>
            <p>{a.description.substring(0, 150)}</p>
            <h3>$ {a.price}</h3>
            <button
              onClick={() => getdata(a)}
              style={{ height: "30px", width: "110px", borderRadius: "15px" }}
            >
              Add To Cart
            </button>
          </GridDivIn>
        ))}
        {/* <input type="text" onChange={(e) => getimput(e)}></input> */}
        {/* <Imp /> */}
        {/* {Imp()} */}
        {/* <p></p> */}
      </GridDiv>
    </div>
  );
};

const Impdiv=styled.div`
display:flex;
justify-content:center;
align-items:center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(31, 44, 51);
  height: 12dvh;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Imgdiv = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-start;
  margin-left: 2%;
  align-items: center;
`;

const Nav = styled.div`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  width: 20%;
  justify-content: space-around;
  align-items: center;
`;

const Images = styled.img`
  width: 200px;
  height: 270px;
  border-radius: 20px;
`;

const GridDiv = styled.div`
  margin-top: 5%;
  text-align: center;
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  gap: 1%;
  justify-content: space-around;
`;
const GridDivIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid grey;
  padding:15px;
  background-image: linear-gradient(to bottom right, white, grey);
  color: black;
  border-radius: 25px;
  box-shadow: 5px 5px 3px lightgrey;
  &:hover {
    background-image: linear-gradient(to bottom right, grey, white);
    button {
      background-color: gold;
    }
`;
