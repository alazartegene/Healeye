// import Hero from "./components/hero";
import Navigation from "./components/Nave/navigation.js";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import Form from "./pages/Form/Form";
import Home from "./pages/Home/Home";
import DocSvg from "./components/svg/DocSvg";

const App = () => {
 
  return (
    <>
    <BrowserRouter>
    <Navigation/>
    
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="book" element={<Form />}></Route>
    </Routes>
    <DocSvg/>
    </BrowserRouter>
    
    </>
    
  );
}


export default App;
