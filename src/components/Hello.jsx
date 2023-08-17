import React from "react";
import sayHello from "../data/sayHello.jsx";

function Hello() {
  const hellos = sayHello.map((hello) => {
    return <>{hello.hello}&nbsp;&nbsp;&nbsp;</>;
  });

  return (
    <p className="hello-container">
      <span className="hello text-3xl mt-6">{hellos}</span>
    </p>
  );
}

export default Hello;
