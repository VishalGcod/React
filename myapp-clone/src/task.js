import { styled } from "styled-components";
import React from "react";
import { useRef } from "react";
import { useState } from "react";

export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:70dvh;
  height:50dvh;
  background-color: ${(prop)=>prop.bgc }
`;
export const Input = styled.input`
  border: 2px solid grey;
  width: 200px;
  height: 30px;
`;
export const Btn = styled.button`
  width: 120px;
  height: 30px;
`;

export const Div=styled.div`width 120px`

function Apps() {
  const [bg, setBgColor] = useState("");
  const btnclick = () => {
    document.body.style.backgroundColor = bg;
  };
  return (
    <div className="bg">
    <Cont bgc={bg}>
      <Input
        id="imp"
        value={bg}
        type="text"
        onChange={(e)=>setBgColor(e.target.value)}
        placeholder="enter"
        name="imput"
      ></Input>
      <Btn onClick={() => btnclick()}>change</Btn>
      {/* <Cont style={{backgroundColor:bg}}></Cont> */}
      </Cont>
    </div>
  );
}


export default Apps;
