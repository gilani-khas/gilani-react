import React from "react";
import ReactDOM from "react-dom/client";

import Text from "./Text";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Text />
    <Text2 />
    <Text3 name='Gilani' age='24' city='Grozny' />
  </>
);

function Text2() {
  return (
    <table border='1'>
      <tr>
        <td>Lorem</td>
        <td>Lorem</td>
      </tr>
    </table>
  );
}
function Text3(props) {
  return (
    <>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.city}</p>
    </>
  );
}
