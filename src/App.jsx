import React from "react";
import Hello from "./components/Hello.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Hello />
      <div className="main-pg text-8xl mt-6">
        <h1 className="main-pg-title">NAOMI YOCUM</h1>
        <h1 className="main-pg-title">ヨーカムなおみ</h1>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
