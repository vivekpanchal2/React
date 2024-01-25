// React.createElement("Tag",{attributes},"content")
// ReactDOM.createRoot(path of element)
// root.render();

import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement("div", { id: "parent" },
React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"I'm a H1 tag"),React.createElement("h3",{},"I'm a H3 tag")]
    ));

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading);