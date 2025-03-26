import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { push, pop } from "../redux/stackSlice";

const Stack = () => {
  const stack = useSelector((state) => state.stack?.items || []); 
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState("");

  return (
    <div>
      <h2>Stack</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => dispatch(push(newItem))}>Push</button>
      <button onClick={() => dispatch(pop())} disabled={stack.length === 0}>
        Pop
      </button>
      <ul>
      {stack.slice().reverse().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Stack;
