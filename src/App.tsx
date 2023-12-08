import "react-bootstrap/dist/react-bootstrap.min.js.LICENSE.txt";
import "../node_modules/bootstrap/js/dist/dom/data.js";
import "../node_modules/bootstrap/";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./sass/main.scss";
import "../node_modules/typed.js/dist/typed.umd.js";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages";

import Main from "./components/main";
import Testimonials from "./components/testimonials";
import Skill from "./components/skill";
import About from "./components/about";
import Contact from "./components/contact";
import Education from "./components/education";
import Settings from "./components/settings";
import Login from "./components/login/index.js";
import Client from "./components/client/index.js";
import Register from "./components/register/index.js";
import User from "./components/users/index.js";
import Portfolio from "./components/portfolio";
import Portfoliadd from "./components/addportfolio/index";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  const navigator =useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigator('/login')
    }
  },[])
  return (
    <Routes>
      <Route index path="/login" element={<Login />} />
        <Route  path="/" element={<Layout/>}>
        <Route />
        <Route path="main"  element={<Main />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="skill" element={<Skill />} />
        <Route path="addportfoli" element={<Portfoliadd />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
        <Route path="education" element={<Education />} />
        <Route path="settings" element={<Settings />} />
        <Route index path="about" element={<About />} />
      </Route>

      <Route path="/client" element={<Client />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default App;
