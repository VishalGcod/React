import { useState } from "react";
import Blogs from "./task-prep3";

const Ustates = () => { 
    const [arr, mappedarr] = useState([
      {
        id: 1,
        text: "hello",
      },
      {
        id: 2,
        text: "am good",
      },
      {
        id: 3,
        text: "hope you are fine",
      },
      {
        id: 4,
        text: "How are you?",
      },
      {
        id: 5,
        text: "Need Help?",
      },
      {
        id: 5,
        text: "Please contact us",
      },
    ]);
    return (
      <div className="maindiv">
        
        {/* <Blogs arr={arr} title='this is it' />
        <Blogs arr={arr.filter((ar)=>ar.star==='star5')} title='this is fifth star'/> */}

      </div>
    );
  };

  export default Ustates;
  