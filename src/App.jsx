import React from "react";
import Banner from "./pages/Banner";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

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
