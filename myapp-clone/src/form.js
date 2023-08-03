import { useState } from "react";
import React from "react";
import { styled } from "styled-components";
import itachi from "./itachi-uchiha-naruto-minimal-art-red-background-5k-2880x1800-7749.jpg";
import StarRating from "./starRat2";
import { Star } from "./starRat2";
import { Rate } from "antd";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Child } from "./reactPart2";

export const Formdta = () => {
  const [formData, setFormData] = useState([]);

  const [fname, setfname] = useState("");

  const [city, setcity] = useState("");

  const [rate, setrate] = useState("");

  const [textar, settextar] = useState("");

  const subform = (e) => {
    e.preventDefault();
    const newFormData = [...formData, { fname, city, rate, textar }];
    setFormData(newFormData);
    setfname("");
    setcity("");
    setrate("");
    settextar("");
  };

  const namechange = (e) => {
    setfname(e.target.value);
    console.log(e.target.value);
  };
  const Imp = (props) => {
    return (
      <Fdt>
        <lable>Name</lable>
        <Fdt>
          <input
            style={{ border: "1px solid black", height: "20px" }}
            type="text"
            placeholder="enter name"
            onChange={namechange}
            value={fname}
          />
        </Fdt>
      </Fdt>
    );
  };

  const selectedcity = (e) => {
    console.log(e.target.value);
    setcity(e.target.value);
  };

  const Drop = () => {
    const darr = ["select city", "chennai", "usa", "russia"];
    return (
      <Fdt>
        <lable>select city</lable>
        <Fdt>
          <select onChange={selectedcity} value={city}>
            {darr.map((d) => (
              <option>{d}</option>
            ))}
          </select>
        </Fdt>
      </Fdt>
    );
  };

  const selectedrating = (e) => {
    console.log(e.target.value);
    setrate(e.target.value);
  };

  const Drop2 = () => {
    const rarr = ["select ratings", 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
    return (
      <Fdt>
        <span>Give rating</span>
        <Fdt>
          <span>
            <select onChange={selectedrating} value={rate}>
              {rarr.map((d) => (
                <option>{d}</option>
              ))}
            </select>
          </span>
        </Fdt>
      </Fdt>
    );
  };

  const Ta = () => {
    return (
      <Fdt>
        <lable>Review</lable>
        <Fdt>
          <textarea
            rows={2}
            cols={16}
            onChange={txtboxdta}
            value={textar}
          ></textarea>
        </Fdt>
      </Fdt>
    );
  };
  const txtboxdta = (e) => {
    settextar(e.target.value);
  };

  // test
  const [tester, settest] = useState("");
  const [tester2, settest2] = useState("");
  const test = (e) => {
    console.log(e.target.value);
    settest(e.target.value);
  };

  // const Star2 = () => {
  //   return (
  //     <div>
  //       <Rate allowHalf value={parseFloat()}></Rate>
  //     </div>
  //   );
  // };

  const funon = () => {
    settest2(tester);
  };
  // test

  const deleteDta = (index) => {
    const updatedFormData = formData.filter((_, i) => i !== index);
    setFormData(updatedFormData);
  };

  const delDta = (newind) => {
    const upd = formData.filter((_, i) => i !== newind);
    setFormData(upd);
  };

  // const Namefilter=({Formdta})=>{
  //   const{fname,city}=formData
  //   const Filt=[fname,city].filter(Boolean).join('')
  //   return(
  //     <div>
  //       <div>filtered={Filt}</div>
  //     </div>
  //   )
  // }

  const editdata = (ind) => {
    const newname = prompt("data to be edited");
    const newcity = prompt("data to be edited");
    const newrate = prompt("data to be edited");
    const newdesc = prompt("data to be edited");
    setfname(newname);
    setcity(newcity);
    setrate(newrate);
    settextar(newdesc);
    const updFormData = [{ fname, city, rate, textar }];
    setFormData(updFormData);
  };

  const filterData = formData.filter((item) => {
    // item.fname.toLoweCase().includes()
  });

  const isFormValid = fname !== "" && city !== "" && textar !== "";

  // const isFormValid = true;
  const[searchquery,setsearchquery]=useState('')
  const searchdata=(e)=>{
    setsearchquery(e.target.value)
    console.log(searchquery);
  }
  const filtdta=formData.filter((i)=>{
    i.fname.toLowerCase().includes(searchquery.toLowerCase())
  })

  return (
    <div>
      <input
        type="search"
        placeholder="search"
        value={searchquery}
        onChange={()=>searchdata()}
        style={{ height: "25px", width: "200px", marginLeft: "30%" }}
      ></input>

      <Frm onSubmit={subform}>
        {Imp()}
        {/* <Namefilter formData={formData}/> */}
        <Drop />
        <Drop2 />
        {Ta()}
        {isFormValid && (
          <button
            style={{ height: "35px", width: "35%", marginLeft: "30%" }}
            type="submit"
          >
            SUBMIT
          </button>
        )}
      </Frm>

      <Divs>
        {formData.map((data, index) => (
          <Items key={index}>
            <div>
              <Idiv src={itachi} height={170} width={170}></Idiv>
            </div>
            <Datacontent>
              Name:{data.fname}
              <br />
              City:{data.city}
              <br />
              Ratings:{data.rate}
              <br />
              <Rate allowHalf value={parseFloat(data.rate)}></Rate>
              {/* <Star2 value={data.rate}></Star2> */}
              <br />
              Description:<p style={{ overflow: "scroll" }}>{data.textar}</p>
              <br />
              <button onClick={() => editdata(index)}>Edit</button>
              <br></br>
              <button onClick={() => deleteDta(index)}>DELETE</button>
              {/* <button onClick={()=>delDta(index)}>del</button> */}
            </Datacontent>
          </Items>
        ))}
      </Divs>
    </div>
  );
};

const Datacontent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 100%;
  width: 50%;
`;

const Divs = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  gap: 5%;
`;

const Items = styled.div`
  height: 300px;
  width: 100%;
  border: 2px solid #bf4f74;
  box-shadow: 4px 3px 4px grey;
  margin-bottom: 25px;
  list-style-type: upper-roman;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid grey;
  margin: 5%;
`;

const Idiv = styled.img`
  border-radius: 50%;
`;

const Frm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: lightblue;
  margin-left: 25%;
  margin-bottom: 25px;
  padding: 2%;
  border: 2px solid grey;
  margin-top: 5%;
  box-shadow: 4px 4px 4px grey;
  width: 50dvw;
  height: 40dvh;
`;

const Fdt = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 25%;
`;

export function Par() {
  const [word, setword] = useState("vishal");
  return (
    <div>
      <h1>{word}</h1>
      <Child changeword={(word) => setword(word)} />
    </div>
  );
}
