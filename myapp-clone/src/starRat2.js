import React from 'react';
import { Rate } from 'antd';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
const StarRating = (props) => {
  let rating=props.rate
  console.log(props.rate)
  const getStars = () => {
    const starIcons = [];
    const roundedRating = Math.round(rating * 2) / 2;
    for (let i = 1; i <= 5; i++) {
      if (roundedRating > i) {
        starIcons.push(<FaStar key={i} color='lightgreen' size="30px"/>);
      } else if (roundedRating >= i-0.5 ) {
        starIcons.push(<FaStarHalfAlt key={i} color='lightgreen' size="30px"/>);
      } else {
        starIcons.push(<FaRegStar key={i} color='lightgreen' size="30px"/>);
      }
    }
    return starIcons;
  };
  return <div>{getStars()}</div>;
};
export default StarRating;


export const Star =(rating)=>{
  const r=rating.rate
  console.log(r); 
  const arr=[]
  const fullstar=Math.floor(r);
  // const halfstar = r%1!==0;
    const gstar=()=>{
      for(let i=1;i<=5;i++){
        if(fullstar>i){
          arr.push(<FaStar/>)
        }else if(fullstar>=i-0.5){
          arr.push(<FaStarHalfAlt/>)
        }else{
          arr.push(<FaRegStar/>)
        }
      }
      return arr
    }
    return<div>{gstar()}</div>
  }

