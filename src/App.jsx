import React from "react";
import Homepage from "./pages/homepage";
import { Route, Routes } from "react-router-dom";
import  Discription  from "./components/Discription";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/:paramsid" element={<Discription />}></Route>
      </Routes>
    </div>
  );
}

export default App;
