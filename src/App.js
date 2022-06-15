// import Hero from "./components/hero";
import Navigation from "./components/navigation";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import Form from "./pages/From";
import Home from "./pages/Home";
import DocSvg from "./components/DocSvg";

const App = () => {
 
  return (
    <>
    <BrowserRouter>
    <Navigation/>
    
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="book" element={<Form />}></Route>
    </Routes>
    {/* <DocSvg/> */}
    </BrowserRouter>
    
    </>
    
  );
}


export default App;
