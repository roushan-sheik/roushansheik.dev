import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home = () => {
  return (
    <section>
      {/* Header Navbar */}
      <header>
        <Header />
      </header>
      {/* main content  */}
      <main>
        {/* banner section  */}
        <Banner />
      </main>
    </section>
  );
};

export default Home;
