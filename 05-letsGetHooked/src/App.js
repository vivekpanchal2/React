import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.jsx";
import Body from "./components/Body";
import Footer from "./components/Footer.jsx";
import Example from "../useState.js";

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
      <Footer />
      <Example />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
