import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Headers.js";
import Body from "./components/Body";

/*
    header
        -logo
        -links
    body
    footer
*/

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);