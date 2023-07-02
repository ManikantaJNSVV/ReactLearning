// const heading = React.createElement("h1", {}, "Hello world from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const TitleFunction = () => <h1>Hello React element</h1>; 

const HeaderComponent = () => {
  return (
    <div>
      {TitleFunction()}
      <TitleFunction></TitleFunction>
      <TitleFunction />

      <span>Learning React with foundation</span>
    </div>
  );
};

root.render(<HeaderComponent />);
