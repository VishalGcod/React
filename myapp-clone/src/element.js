import { useState } from "react";

export const Buttonclick = () => {
  const [value, setValue] = useState("");
  const [paraval, setparaval] = useState("");
  const arr = [
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
  ];

  function text1(text) {
    const btnele = text;
    setValue(value + btnele);
  }

  const Ta = (props) => {
    return (
      <div>
        <textarea>{props.text}</textarea>
      </div>
    );
  };

  const Para = (props) => {
    return (
      <div>
        <p>{props.ptext}</p>
      </div>
    );
  };

  const Btnsub = () => {
    return (
      <div>
        <button onClick={subbtn}>submit</button>
        <button onClick={clrbtn}>clear</button>
      </div>
    );
  };

  function subbtn() {
    setparaval(value);
  }

  function clrbtn() {
    setValue("");
    setparaval("");
  }

  return (
    <div className="buttons">
      <div>
        {arr?.map((a) => {
          return (
            <button
              key={a.id}
              onClick={() => {
                text1(a.text);
              }}
            >
              {a.text}
            </button>
          );
        })}
        <Ta text={value} />
        <Para ptext={paraval} />
        <Btnsub />
      </div>
    </div>
  );
};
