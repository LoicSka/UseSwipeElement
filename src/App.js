import React from "react";
import "./styles.css";
import styled from "styled-components";
import useSwipeEvent from "./useSwipeEvent";

const { useRef } = React;

const Square = styled.div`
  min-width: 300px;
  min-height: 300px;
  background-color: #ccc;
  margin: 100px;
`;

export default function App() {
  const ctnRef = useRef(null);
  useSwipeEvent(() => {
    console.log("Yahuurr");
  }, ctnRef.current);

  return (
    <div className="App">
      <Square ref={ctnRef} />
      <h1>Hey</h1>
    </div>
  );
}
