import { useState } from "react";

export const Counted = () => {
  const [countdta, getcountdta] = useState([]);
  const addtoCart = (item) => {
    getcountdta((prevcart) => ({
      ...prevcart,
      [item]: (prevcart[item] || 0) + 1,
    }));
  };
  const formatCartItems = () => {
    return Object.entries(countdta).map(([item, count]) => ({
      item,
      count,
    }));
  };

  return (
    <div>
      <button onClick={() => addtoCart("apple")}>Add Apple</button>
      <button onClick={() => addtoCart("orange")}>Add Orange</button>
      <button onClick={() => addtoCart("banana")}>Add Banana</button>
      {formatCartItems().map((e) => (
        <div>
          <h1>{e.item}</h1>
          <h1>{e.count}</h1>
        </div>
      ))}
    </div>
  );
};
