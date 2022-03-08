import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./core/Home";

function RoutesManager(props) {

       return (
              <BrowserRouter>
                     <Routes>
                            <Route path="/" element={<Home/>} />
                     </Routes>
              </BrowserRouter>
       );
}

export default RoutesManager;