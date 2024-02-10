import React from "react";
import ReactDOM from "react-dom/client";

//using React createElement
const title = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "H1 tag"),
  React.createElement("h2", {}, "H2 tag"),
  React.createElement("h3", {}, "H3 Tag"),
]);

// using JSX
const title2 = (
  <div class="title">
    <h1 key="1">H1 Tag</h1>
    <h2 key="2">H2 Tag</h2>
    <h3 key="3">H3 Tag</h3>
  </div>
);

//Using Functional componants
const code = () => <div>Hello</div>;

const Title3 = () => (
  <div className="title">
    <h1>H1 Tag</h1>
    <h2>H2 Tag</h2>
    <h3>H3 Tag</h3>
    {<code />}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<Title3 />);

const Head2 = function () {
  return <h2 id="react">Namaste React</h2>;
};

const head = (
  <div>
    <h1>Hello world</h1>
    <Head2 />
  </div>
);