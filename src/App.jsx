import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Not_Found from "./pages/Not_Found";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <main className="container w-[90%] mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Not_Found />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
