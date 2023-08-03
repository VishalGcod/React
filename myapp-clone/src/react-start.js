import reactLogo from "./itachi-uchiha-naruto-minimal-art-red-background-5k-2880x1800-7749.jpg";

// export const Image = () => {
//   return (
//     <div className="cards">
//       <img className="img" src={reactLogo} alt="react logo" />
//     </div>
//   );
// };

// export const Para = ({ para }) => {
//   return <p>{para}</p>;
// };

export const Option = ({ text }) => {
  return <span>{text}</span>;
};

export const FormData = () => {
  return (
    <from className="form">
      <input type="text" placeholder="name"></input>
      <input type="number" placeholder="mob number"></input>
      <input type="email" placeholder="mailid"></input>
      <input type="submit"></input>
    </from>
  );
};
