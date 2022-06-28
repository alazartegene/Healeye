import Navigation from "./components/Nave/navigation.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form/Form";
import Home from "./pages/Home/Home";
import SignIn from "./pages/Sign in/Signin.js";
import Service from "./components/Service/Service.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="book" element={<Form />}></Route>
          <Route path="Services" element={<Service />}></Route>
          <Route path="Sign in" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
