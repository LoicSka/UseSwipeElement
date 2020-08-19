import * as React from "react";
import "./styles.css";
import styled from "styled-components";
import useSwipeEvent from "./useSwipeEvent";

const Square = styled.div `
  min-width: 300px;
  min-height: 300px;
  background-color: #ccc;
  margin: 100px;
`;

const {useEffect, useRef, useState} = React;

export default function App() {
  const ctnRef = useRef(null);
  const [hasLoaded,
    setHasLoaded] = useState(false);

  useSwipeEvent((swipeContent) => {
    console.log("Yahuurr1", swipeContent.delta);
  }, ctnRef.current);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <div className="App">
      <Square ref={ctnRef}/>
      <h1>Hey</h1>
    </div>
  );
}
