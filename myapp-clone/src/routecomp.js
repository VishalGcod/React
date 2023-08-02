import { Link } from "react-router-dom";
import styled from "styled-components";
import itachi from "./itachi-uchiha-naruto-minimal-art-red-background-5k-2880x1800-7749.jpg";
import { Home } from "./axiosrequests";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { BsYinYang } from "react-icons/bs";

const NotFound = () => {
  return (
    <Otherdivs>
      <h1>404 Not Found</h1>
      <p>The requested page could not be found.</p>
    </Otherdivs>
  );
};

export default NotFound;

export const Login = () => {
  return (
    <Otherdivs>
      <h1>This Is Login</h1>
    </Otherdivs>
  );
};

export const About = () => {
  return (
    <Otherdivs>
      <h1>This Is About</h1>
    </Otherdivs>
  );
};

export const Buyproduct = ({ setcartitems, cartitem }) => {
  const deleteItem = (index) => {
    const delitem = cartitem.filter((_, i) => i !== index);
    setcartitems(delitem);
  };
  let total = 0;
  total = cartitem.reduce((tot, item) => tot + item?.price, 0);

  const count=0
  const repeat=cartitem.map((e)=>{if(cartitem.id===cartitem.id){
    console.log('repeated'+cartitem.id,count+1);
  }})

  return (
    <Otherdivs>
      {cartitem?.length === 0 ? (
        <h1>
          Cart Empty Add Items <BsYinYang />{" "}
        </h1>
      ) : (
        <Table>
          <thead>
            <Tabledata>
              <Tabledata2>Index</Tabledata2>
              <Tabledata2>Hero Name</Tabledata2>
              <Tabledata2>items id</Tabledata2>
            </Tabledata>
          </thead>
          {cartitem?.map((e, index) => (
            <tbody>
              <Tabledata>
                <Tabledata2>{index + 1}</Tabledata2>
                <Tabledata2>
                  {e?.title} {e?.otherName}
                </Tabledata2>
                <Tabledata2>{e?.id}</Tabledata2>
                <Tabledata2>
                  <button onClick={() => deleteItem(index)}>
                    <AiFillDelete />
                  </button>
                </Tabledata2>
                <Tabledata2>Rs. {e?.price}</Tabledata2>
              </Tabledata>
            </tbody>
          ))}
          <h4>total selected:{cartitem?.length}</h4>
          <h5>total Price:{total}</h5>
        </Table>
      )}
    </Otherdivs>
  );
};

export const NavTxt = ({ cartitem }) => {
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
        <Nav>
          <Links to="/login">Login</Links>
          <Links to="/">Products</Links>
          <Links to="/about">About</Links>
          <Links to="/cart">
            <AiOutlineShoppingCart />
            <button>{cartitem?.length}</button>
          </Links>
        </Nav>
      </Header>
    </div>
  );
};

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
  width: 60%;
  justify-content: flex-start;
  margin-left: 2%;
  align-items: center;
`;

const Nav = styled.div`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  width: 40%;
  justify-content: space-around;
  align-items: center;
`;

const Otherdivs = styled.div`
  margin-top: 150px;
`;

const Links = styled(Link)`
  color: white;
  text-decoration: none;
`;
const Table = styled.table`
  border: 2px solid white;
  width: 100%;
  border-collapse: collapse;
`;

const Tabledata = styled.tr`
  border: 2px solid lightgrey;
`;

const Tabledata2 = styled.td`
  border: 2px solid lightgrey;
`;
const Divis = styled.div`
  display: grid;
  place-items: center;
`;
