import React from "react";
import ReactDOM from "react-dom/client";

const Head2 = function () {
  return <h2 id="r">Namaste React</h2>;
};

const head = (
  <div>
    <h1>Hello world</h1>
    <Head2 />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(head);
