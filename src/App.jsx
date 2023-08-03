import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Main Paige</h1>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
