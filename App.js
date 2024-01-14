const heading = React.createElement("h1", {id:"hello",xyz:"test"}, "Hello Word fromReact");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);