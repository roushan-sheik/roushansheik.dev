import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="container w-[90%] mx-auto">
      <Header />
      <Banner />
      <Footer />
    </main>
  );
};

export default App;
