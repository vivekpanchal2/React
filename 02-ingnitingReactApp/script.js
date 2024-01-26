import React from "react";
import ReactDOM from "react-dom/client";

const head = React.createElement("div",{id:"head"},
                React.createElement("div",{id:"head2"},"Surprise Surprise MF The king is back") 
            )

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(head);