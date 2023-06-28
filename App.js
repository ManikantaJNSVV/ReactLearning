// const heading = React.createElement("h1", {}, "Hello world from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello H1"),
    React.createElement("h2", {}, "Hello H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello H1"),
    React.createElement("h2", {}, "Hello H2"),
  ]),
]);
root.render(parent);
