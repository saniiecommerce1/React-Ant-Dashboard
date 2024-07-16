import { Space } from "antd";
import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from './Pages/Login'
import Home from "./Pages/Home";


import Complaints from "./Pages/Complaints";
import Dashboard from "./Pages/Dashbaord";
import Inventory from "./Pages/Inventory";
import Orders from "./Pages/Orders";
import TestResidence from "./Pages/TestResident";
import { TokenProvider } from "./Components/TokenProvider";


function App() {



  return (
    <div className="App">
      <TokenProvider>

       <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Home />}>
        
      {/* <Route path="/" element={<Dashboard />}></Route> */}
      {/* <Route path="/inventory" element={<Inventory />}></Route> */}
      {/* <Route path="/orders" element={<Orders />}></Route> */}
      <Route path="/complaints" element={<Complaints />}></Route>
      <Route path="/test-residence" element={<TestResidence/>}></Route>
        
        
      </Route>   
    </Routes>

    </TokenProvider>
    </div>
  );
}
export default App;
